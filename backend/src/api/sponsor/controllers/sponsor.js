// Path: ./src/api/sponsor/controllers/sponsor.js
'use strict';

/**
 * sponsor controller
 */

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreController('api::sponsor.sponsor', ({ strapi }) => ({
  async bulkCreate(ctx) {
    const { data } = ctx.request.body;

    if (!Array.isArray(data)) {
      ctx.badRequest('Request body must contain an array of objects under the "data" key.');
      return;
    }

    const createdEntries = [];
    const failedEntries = [];

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

        // --- Type Conversions and Validation ---
        // sl_no (integer)
        const slNoParsed = parseInt(entry.sl_no, 10);
        if (isNaN(slNoParsed)) {
          throw new Error('Invalid data format for sl_no: must be an integer.');
        }

        // time (decimal)
        const timeParsed = parseFloat(entry.time);
        if (isNaN(timeParsed)) {
          throw new Error('Invalid data format for time: must be a decimal number.');
        }

        // costofprojects (integer)
        const costOfProjectsParsed = parseInt(entry.costofprojects, 10);
        if (isNaN(costOfProjectsParsed)) {
          throw new Error('Invalid data format for costofprojects: must be an integer.');
        }

        // Prepare the entry for input to Strapi's entityService.create
        const parsedEntry = {
          sl_no: slNoParsed,
          principalInvestigator: entry.principalInvestigator,
          title: entry.title,
          industry: entry.industry,
          sanctiondate: entry.sanctiondate,
          time: timeParsed, // Pass as number (decimal)
          costofprojects: costOfProjectsParsed,
        };

        // Use Strapi's entityService to create the entry
        const createdEntry = await strapi.entityService.create('api::sponsor.sponsor', {
          data: parsedEntry,
        });

        createdEntries.push(createdEntry);

      } catch (error) {
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