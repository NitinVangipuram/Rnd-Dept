// Path: ./src/api/consultancy/controllers/consultancy.ts
import { factories } from '@strapi/strapi';
import { Context } from 'koa';

// Define the shape of a Consultancy entry for *input* to entityService.create
// For 'integer' and 'biginteger' schema types, Strapi's entityService.create
// typically expects the values in the 'data' payload to be 'string'.
interface ConsultancyInput {
  sl_no: string; // <-- Still 'string' for input payload
  title: string;
  Investigator: string;
  SponsoringAgencyScheme: string;
  sanctiondate: string; // Schema is 'string'
  duration: string;
  values: string; // <-- Still 'string' for input payload
}

// Define the shape of a Consultancy entry as *returned* by Strapi's entityService.
// We expect these to be the database types (numbers), but we'll use 'unknown' for
// the assertion to bypass strict checks if Strapi's return types are inconsistent.
interface ConsultancyOutput {
  id: number; // Strapi usually returns an ID
  sl_no: number; // <-- Expecting 'number' as per schema (integer)
  title: string;
  Investigator: string;
  SponsoringAgencyScheme: string;
  sanctiondate: string;
  duration: string;
  values: number; // <-- Expecting 'number' as per schema (biginteger)
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  // Add other fields Strapi might return, e.g., locale, documentId if applicable
}

export default factories.createCoreController('api::consultancy.consultancy', ({ strapi }) => ({
  async bulkCreate(ctx: Context) {
    const { data } = ctx.request.body;

    if (!Array.isArray(data)) {
      ctx.badRequest('Request body must contain an array of objects under the "data" key.');
      return;
    }

    const createdEntries: ConsultancyOutput[] = [];
    const failedEntries: { entry: any; error: string }[] = [];

    for (const entry of data) {
      try {
        // --- Basic presence validation of incoming raw data properties ---
        if (
          entry.sl_no === undefined || entry.sl_no === null ||
          !entry.title ||
          !entry.Investigator ||
          !entry.SponsoringAgencyScheme ||
          entry.sanctiondate === undefined || entry.sanctiondate === null ||
          !entry.duration ||
          entry.values === undefined || entry.values === null
        ) {
          throw new Error('Missing one or more required fields (sl_no, title, Investigator, SponsoringAgencyScheme, sanctiondate, duration, values).');
        }

        // --- Type Conversions and Validation (for incoming 'entry' data) ---
        const slNoValidated = parseInt(entry.sl_no, 10);
        if (isNaN(slNoValidated)) {
          throw new Error('Invalid data format for sl_no: must be an integer.');
        }

        const valuesValidated = parseFloat(entry.values);
        if (isNaN(valuesValidated)) {
          throw new Error('Invalid data format for values: must be a valid number (biginteger).');
        }

        // Prepare the entry for *input* to Strapi's entityService.create (ConsultancyInput type)
        // Convert validated numbers back to strings for the 'data' payload.
        const parsedEntry: ConsultancyInput = {
          sl_no: String(slNoValidated), // Convert to string for entityService.create input
          title: entry.title,
          Investigator: entry.Investigator,
          SponsoringAgencyScheme: entry.SponsoringAgencyScheme,
          sanctiondate: entry.sanctiondate,
          duration: entry.duration,
          values: String(valuesValidated), // Convert to string for entityService.create input
        };

        // Use Strapi's entityService to create the entry
        // Cast to 'unknown' first, then to 'ConsultancyOutput' to handle type inconsistencies
        const createdEntry = await strapi.entityService.create('api::consultancy.consultancy', {
          data: parsedEntry,
        }) as unknown as ConsultancyOutput; // <--- The key change here

        createdEntries.push(createdEntry);

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