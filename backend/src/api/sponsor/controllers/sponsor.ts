// Path: ./src/api/sponsor/controllers/sponsor.ts
import { factories } from '@strapi/strapi';
import { Context } from 'koa';

// Define the shape of a Sponsor entry for *input* to entityService.create
interface SponsorInput {
  sl_no: number; // Schema is 'integer', pass as number after parsing
  principalInvestigator: string;
  title: string;
  industry: string;
  sanctiondate: string; // Schema is 'string'
  time: number; // <--- ADDED: Schema is 'decimal', pass as number after parsing
  costofprojects: number; // Schema is 'integer', pass as number after parsing
}

// Define the shape of a Sponsor entry as *returned* by Strapi's entityService
interface SponsorOutput extends SponsorInput {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  // Any other fields Strapi might add on return
}

export default factories.createCoreController('api::sponsor.sponsor', ({ strapi }) => ({
  async bulkCreate(ctx: Context) {
    const { data } = ctx.request.body;

    if (!Array.isArray(data)) {
      ctx.badRequest('Request body must contain an array of objects under the "data" key.');
      return;
    }

    const createdEntries: SponsorOutput[] = [];
    const failedEntries: { entry: any; error: string }[] = [];

    for (const entry of data) {
      try {
        // --- Basic presence validation of incoming raw data properties ---
        if (
          entry.sl_no === undefined || entry.sl_no === null ||
          !entry.principalInvestigator ||
          !entry.title ||
          !entry.industry ||
          entry.sanctiondate === undefined || entry.sanctiondate === null ||
          entry.time === undefined || entry.time === null || // Validate 'time'
          entry.costofprojects === undefined || entry.costofprojects === null
        ) {
          throw new Error('Missing one or more required fields (sl_no, principalInvestigator, title, industry, sanctiondate, time, costofprojects).');
        }

        // --- Type Conversions and Validation for incoming 'entry' data ---
        const slNoParsed = parseInt(entry.sl_no, 10);
        if (isNaN(slNoParsed)) {
          throw new Error('Invalid data format for sl_no: must be an integer.');
        }

        const timeParsed = parseFloat(entry.time); // Parse as float for decimal type
        if (isNaN(timeParsed)) {
          throw new Error('Invalid data format for time: must be a decimal number.');
        }

        const costOfProjectsParsed = parseInt(entry.costofprojects, 10);
        if (isNaN(costOfProjectsParsed)) {
          throw new Error('Invalid data format for costofprojects: must be an integer.');
        }

        // Prepare the entry for input to Strapi's entityService.create (SponsorInput type)
        const parsedEntry: SponsorInput = {
          sl_no: slNoParsed,
          principalInvestigator: entry.principalInvestigator,
          title: entry.title,
          industry: entry.industry,
          sanctiondate: entry.sanctiondate,
          time: timeParsed, // Pass as number
          costofprojects: costOfProjectsParsed,
        };

        // Use Strapi's entityService to create the entry
        const createdEntry = await strapi.entityService.create('api::sponsor.sponsor', {
          data: parsedEntry,
        }) as unknown as SponsorOutput; // Assert type for robustness

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