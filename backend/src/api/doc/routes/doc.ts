// ./src/api/doc/routes/doc.ts
import { factories } from '@strapi/strapi'; // Not strictly needed for a simple routes file, but good practice if you were using factories here

// The routes are defined as a simple object with a 'routes' array.
// This is how you expose actions from your controllers.
export default {
  routes: [
    // Default GET /api/docs (find all)
    {
      method: 'GET',
      path: '/docs',
      handler: 'api::doc.doc.find',
      config: {
        auth: { scope: ['api::doc.doc.find'] }, // API token auth scope
      },
    },
    // Default GET /api/docs/:id (find one)
    {
      method: 'GET',
      path: '/docs/:id',
      handler: 'api::doc.doc.findOne',
      config: {
        auth: { scope: ['api::doc.doc.findOne'] }, // API token auth scope
      },
    },
    // Default POST /api/docs (create single)
    {
      method: 'POST',
      path: '/docs',
      handler: 'api::doc.doc.create',
      config: {
        auth: { scope: ['api::doc.doc.create'] }, // API token auth scope
      },
    },
    // Default PUT /api/docs/:id (update single)
    {
      method: 'PUT',
      path: '/docs/:id',
      handler: 'api::doc.doc.update',
      config: {
        auth: { scope: ['api::doc.doc.update'] }, // API token auth scope
      },
    },
    // Default DELETE /api/docs/:id (delete single)
    {
      method: 'DELETE',
      path: '/docs/:id',
      handler: 'api::doc.doc.delete',
      config: {
        auth: { scope: ['api::doc.doc.delete'] }, // API token auth scope
      },
    },

    // --- YOUR CUSTOM BULK CREATE ROUTE ---
    // --- YOUR CUSTOM BULK CREATE ROUTE ---
{
  method: 'POST', // <--- THIS MUST BE 'POST'
  path: '/docs/bulk', // <--- THIS MUST BE EXACTLY '/docs/bulk'
  handler: 'doc.bulkCreate', // <--- THIS MUST BE EXACTLY 'doc.bulkCreate'
  config: {
    auth: { scope: ['api::doc.doc.bulkCreate'] },
    policies: [],
    middlewares: [],
  },
},
  ],
};