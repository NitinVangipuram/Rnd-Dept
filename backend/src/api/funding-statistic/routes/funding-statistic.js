// ./src/api/funding-statistic/routes/funding-statistic.js
'use strict';

/**
 * funding-statistic router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::funding-statistic.funding-statistic', {
  routes: [
    // Default GET /api/funding-statistics (find all)
    {
      method: 'GET',
      path: '/funding-statistics',
      handler: 'api::funding-statistic.funding-statistic.find',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.find'] }, // API token auth
      },
    },
    // Default GET /api/funding-statistics/:id (find one)
    {
      method: 'GET',
      path: '/funding-statistics/:id',
      handler: 'api::funding-statistic.funding-statistic.findOne',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.findOne'] }, // API token auth
      },
    },
    // Default POST /api/funding-statistics (create single)
    {
      method: 'POST',
      path: '/funding-statistics',
      handler: 'api::funding-statistic.funding-statistic.create',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.create'] }, // API token auth
      },
    },
    // Default PUT /api/funding-statistics/:id (update single)
    {
      method: 'PUT',
      path: '/funding-statistics/:id',
      handler: 'api::funding-statistic.funding-statistic.update',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.update'] }, // API token auth
      },
    },
    // Default DELETE /api/funding-statistics/:id (delete single)
    {
      method: 'DELETE',
      path: '/funding-statistics/:id',
      handler: 'api::funding-statistic.funding-statistic.delete',
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.delete'] }, // API token auth
      },
    },

    // --- YOUR CUSTOM BULK CREATE ROUTE ---
    {
      method: 'POST',
      path: '/funding-statistics/bulk', // <-- This is your custom endpoint path
      handler: 'funding-statistic.bulkCreate', // <-- This maps to your controller method
      config: {
        auth: { scope: ['api::funding-statistic.funding-statistic.bulkCreate'] }, // Define a custom scope for API token auth
        policies: [],
        middlewares: [],
      },
    },
  ],
});