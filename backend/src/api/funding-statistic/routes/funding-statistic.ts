// ./src/api/funding-statistic/routes/funding-statistic.ts
import { factories } from '@strapi/strapi'; // Not strictly needed for a simple routes file, but good practice if you were using factories here

// The routes are defined as a simple object with a 'routes' array.
// This is how you expose actions from your controllers.
export default {
  routes: [
    // Default GET /api/funding-statistics (find all)
    {
      method: 'GET',
      path: '/funding-statistics',
      handler: 'api::funding-statistic.funding-statistic.find',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.find'] }, // API token auth scope
      },
    },
    // Default GET /api/funding-statistics/:id (find one)
    {
      method: 'GET',
      path: '/funding-statistics/:id',
      handler: 'api::funding-statistic.funding-statistic.findOne',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.findOne'] }, // API token auth scope
      },
    },
    // Default POST /api/funding-statistics (create single)
    {
      method: 'POST',
      path: '/funding-statistics',
      handler: 'api::funding-statistic.funding-statistic.create',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.create'] }, // API token auth scope
      },
    },
    // Default PUT /api/funding-statistics/:id (update single)
    {
      method: 'PUT',
      path: '/funding-statistics/:id',
      handler: 'api::funding-statistic.funding-statistic.update',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.update'] }, // API token auth scope
      },
    },
    // Default DELETE /api/funding-statistics/:id (delete single)
    {
      method: 'DELETE',
      path: '/funding-statistics/:id',
      handler: 'api::funding-statistic.funding-statistic.delete',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.delete'] }, // API token auth scope
      },
    },

    // --- YOUR CUSTOM BULK CREATE ROUTE ---
    // --- YOUR CUSTOM BULK CREATE ROUTE ---
{
  method: 'POST', // <--- THIS MUST BE 'POST'
  path: '/funding-statistics/bulk', // <--- THIS MUST BE EXACTLY '/funding-statistics/bulk'
  handler: 'funding-statistic.bulkCreate', // <--- THIS MUST BE EXACTLY 'funding-statistic.bulkCreate'
  config: {
    auth: { scope: ['api::funding-statistic.funding-statistic.bulkCreate'] },
    policies: [],
    middlewares: [],
  },
},
  ],
};