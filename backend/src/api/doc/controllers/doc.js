// ./src/api/doc/controllers/doc.js
'use strict';

/**
 * doc controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::doc.doc', ({ strapi }) => ({
  // Our custom method for bulk creation
  async bulkCreate(ctx) {
    const { data } = ctx.request.body; 
    if (!Array.isArray(data)) {
      return ctx.badRequest('Request body must contain an array of objects under the "data" key.');
    }

    const createdEntries = [];
    const failedEntries = [];

    for (const entry of data) {
      try {
        // 2. Data transformation/validation for each entry
        // Ensure incoming name and url are arrays. If not, default to empty arrays.
        const names = Array.isArray(entry.name) ? entry.name : [];
        const urls = Array.isArray(entry.url) ? entry.url : [];

        const parsedEntry = {
          category: entry.category,
          name: names, // Assign the (potentially normalized) array
          url: urls,   // Assign the (potentially normalized) array
          // If you have a 'text' field, add it here:
          // text: entry.text,
        };

        // Additional basic validation: check if all required fields are present
        // and if arrays have at least one element.
        // Removed `parsedEntry.text` from validation as it wasn't in your data structure.
        if (!parsedEntry.category || names.length === 0 || urls.length === 0) {
            throw new Error('Invalid data format for an entry: category is required, and at least one name and url must be provided.');
        }

        // 3. Use Strapi's entityService to create the entry
        const createdEntry = await strapi.entityService.create('api::doc.doc', {
          data: parsedEntry,
        });
        createdEntries.push(createdEntry);

      } catch (error) {
        // 4. Handle errors for individual entries
        // Log the full error object for better debugging
        console.error(`Failed to create entry: ${JSON.stringify(entry)} - Error:`, error);
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