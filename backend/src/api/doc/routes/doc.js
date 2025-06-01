// ./src/api/doc/routes/doc.js
'use strict';

/**
 * doc router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::doc.doc', {
  routes: [
    // Default GET /api/docs (find all)
    {
      method: 'GET',
      path: '/docs',
      handler: 'api::doc.doc.find',
      config: {
        auth: { scope: ['api::doc.doc.find'] }, // API token auth
      },
    },
    // Default GET /api/docs/:id (find one)
    {
      method: 'GET',
      path: '/docs/:id',
      handler: 'api::doc.doc.findOne',
      config: {
        auth: { scope: ['api::doc.doc.findOne'] }, // API token auth
      },
    },
    // Default POST /api/docs (create single)
    {
      method: 'POST',
      path: '/docs',
      handler: 'api::doc.doc.create',
      config: {
        auth: { scope: ['api::doc.doc.create'] }, // API token auth
      },
    },
    // Default PUT /api/docs/:id (update single)
    {
      method: 'PUT',
      path: '/docs/:id',
      handler: 'api::doc.doc.update',
      config: {
        auth: { scope: ['api::doc.doc.update'] }, // API token auth
      },
    },
    // Default DELETE /api/docs/:id (delete single)
    {
      method: 'DELETE',
      path: '/docs/:id',
      handler: 'api::doc.doc.delete',
      config: {
        auth: { scope: ['api::doc.doc.delete'] }, // API token auth
      },
    },

    // --- YOUR CUSTOM BULK CREATE ROUTE ---
    {
      method: 'POST',
      path: '/docs/bulk', // <-- This is your custom endpoint path
      handler: 'doc.bulkCreate', // <-- This maps to your controller method
      config: {
        auth: { scope: ['api::doc.doc.bulkCreate'] }, // Define a custom scope for API token auth
        policies: [],
        middlewares: [],
      },
    },
  ],
});