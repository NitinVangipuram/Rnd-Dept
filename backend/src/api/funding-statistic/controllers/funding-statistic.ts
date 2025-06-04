// ./src/api/funding-statistic/controllers/funding-statistic.ts
import { factories } from '@strapi/strapi';
import { Context } from 'koa';

// Define the shape of a FundingStatistic entry for type safety for *input* to entityService.create
// These properties should match what is explicitly marked as 'required: true' in your schema.json
interface FundingStatisticInput {
  sl_no: number; // Assuming 'required: true' in schema.json for sl_no
  name: string;  // Assuming 'required: true' in schema.json for name
  url: string;   // Assuming 'required: true' in schema.json for url
  // Add other fields that are 'required: true' in your schema.json here
}

// Define the shape of a FundingStatistic entry as returned by Strapi's entityService
// This often includes internal Strapi fields like id, timestamps, and some fields might be optional
interface FundingStatisticOutput extends FundingStatisticInput {
  id: number; // Strapi usually returns an ID
  createdAt: string;
  updatedAt: string;
  publishedAt?: string; // Optional if draft & publish is enabled
  // Any other fields Strapi might add on return
}

export default factories.createCoreController('api::funding-statistic.funding-statistic', ({ strapi }) => ({
  async bulkCreate(ctx: Context) {
    const { data } = ctx.request.body;

    if (!Array.isArray(data)) {
      ctx.badRequest('Request body must contain an array of objects under the "data" key.');
      return;
    }

    const createdEntries: FundingStatisticOutput[] = []; // Array to store returned (Output) entities
    const failedEntries: { entry: any; error: string }[] = []; // 'any' for failed entry to be flexible

    for (const entry of data) {
      try {
        // Prepare the entry for input to Strapi's entityService.create
        const parsedEntry: FundingStatisticInput = {
          sl_no: parseInt(entry.sl_no, 10),
          name: entry.name,
          url: entry.url,
        };

        // Basic validation before sending to Strapi (optional, Strapi's validation will also run)
        if (isNaN(parsedEntry.sl_no) || !parsedEntry.name || !parsedEntry.url) {
            throw new Error('Invalid data format for an entry: sl_no must be a number, name and url are required.');
        }

        // Use Strapi's entityService to create the entry
        // We expect `createdEntry` to be of type FundingStatisticOutput
        const createdEntry = await strapi.entityService.create('api::funding-statistic.funding-statistic', {
          data: parsedEntry, // Pass the FundingStatisticInput here
        });

        // Push the created entry to the array, asserting its type to FundingStatisticOutput
        createdEntries.push(createdEntry as FundingStatisticOutput);

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