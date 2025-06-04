// ./src/api/doc/controllers/doc.ts
import { factories } from '@strapi/strapi';
import { Context } from 'koa';

// Define the shape of a Doc entry for type safety for *input* to entityService.create
// IMPORTANT: These types should ideally match your Strapi schema for 'api::doc.doc'
// If Strapi's generated types conflict, it means your schema.json or build process needs fixing.
interface DocInput {
  category: string;
  name: string[]; // Expected to be an array of strings in your logic
  url: string[];  // Expected to be an array of strings in your logic
}

// Define the shape of a Doc entry as returned by Strapi's entityService
interface DocOutput extends DocInput {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  // Note: Strapi's actual return type for JSON fields might still be a string
  // if its internal types are misaligned. This interface assumes it's an array.
}

export default factories.createCoreController('api::doc.doc', ({ strapi }) => ({
  async bulkCreate(ctx: Context) {
    const { data } = ctx.request.body;

    if (!Array.isArray(data)) {
      ctx.badRequest('Request body must contain an array of objects under the "data" key.');
      return;
    }

    const createdEntries: DocOutput[] = [];
    const failedEntries: { entry: any; error: string }[] = [];

    for (const entry of data) {
      try {
        const names = Array.isArray(entry.name) ? entry.name : [];
        const urls = Array.isArray(entry.url) ? entry.url : [];

        // Cast to 'any' before assigning to parsedEntry, then cast parsedEntry to DocInput
        // This is a workaround for TypeScript's strictness when Strapi's generated types are out of sync.
        const parsedEntry: DocInput = {
          category: entry.category,
          name: names as any, // Explicitly cast to any to bypass type check
          url: urls as any,   // Explicitly cast to any to bypass type check
        };

        if (!parsedEntry.category || parsedEntry.name.length === 0 || parsedEntry.url.length === 0) {
            throw new Error('Invalid data format for an entry: category is required, and at least one name and url must be provided.');
        }

        const createdEntry = await strapi.entityService.create('api::doc.doc', {
          // Cast the entire data object to 'any' to bypass strict type checking against Strapi's generated types
          data: parsedEntry as any,
        });

        // Cast the returned entry to 'unknown' first, then to 'DocOutput'
        // This tells TypeScript "I know what I'm doing, trust me."
        createdEntries.push(createdEntry as unknown as DocOutput);

      } catch (error: any) {
        console.error(`Failed to create entry: ${JSON.stringify(entry)} - Error: ${error.message}`);
        failedEntries.push({ entry, error: error.message });
      }
    }

    if (failedEntries.length > 0) {
      ctx.response.status = createdEntries.length > 0 ? 207 : 400;
      ctx.body = {
        message: 'Bulk creation complete, but some entries failed.',
        created: createdEntries,
        failed: failedEntries,
      };
    } else {
      ctx.body = { data: createdEntries, message: 'All entries created successfully.' };
      ctx.status = 201;
    }
  },
}));