// ./src/api/funding-statistic/controllers/funding-statistic.js
'use strict';

/**
 * funding-statistic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::funding-statistic.funding-statistic', ({ strapi }) => ({
  // Our custom method for bulk creation
  async bulkCreate(ctx) {
    const { data } = ctx.request.body; // Expects an array under the 'data' key

    // 1. Basic validation: Ensure 'data' exists and is an array
    if (!Array.isArray(data)) {
      return ctx.badRequest('Request body must contain an array of objects under the "data" key.');
    }

    const createdEntries = [];
    const failedEntries = [];

    for (const entry of data) {
      try {
        // 2. Data transformation/validation for each entry
        // Ensure sl_no is parsed as an integer. `parseInt` will handle string numbers.
        const parsedEntry = {
          sl_no: parseInt(entry.sl_no),
          name: entry.name,
          url: entry.url,
        };

        // Additional basic validation (e.g., check for NaN after parseInt)
        if (isNaN(parsedEntry.sl_no) || !parsedEntry.name || !parsedEntry.url) {
            throw new Error('Invalid data format for an entry: sl_no must be a number, name and url are required.');
        }

        // 3. Use Strapi's entityService to create the entry
        const createdEntry = await strapi.entityService.create('api::funding-statistic.funding-statistic', {
          data: parsedEntry,
        });
        createdEntries.push(createdEntry);

      } catch (error) {
        // 4. Handle errors for individual entries
        console.error(`Failed to create entry: ${JSON.stringify(entry)} - Error: ${error.message}`);
        failedEntries.push({ entry, error: error.message });
      }
    }

    // 5. Respond based on the outcome
    if (failedEntries.length > 0) {
      ctx.response.status = createdEntries.length > 0 ? 207 : 400; // 207 if partial success, 400 if all failed
      ctx.body = {
        message: 'Bulk creation complete, but some entries failed.',
        created: createdEntries,
        failed: failedEntries,
      };
    } else {
      ctx.body = { data: createdEntries, message: 'All entries created successfully.' };
      ctx.status = 201; // HTTP 201 Created
    }
  },
}));