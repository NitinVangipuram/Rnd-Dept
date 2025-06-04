// Path: ./src/api/sponsor/routes/sponsor.ts
import { factories } from '@strapi/strapi';

/**
 * sponsor router
 *
 * This file combines the default Strapi core routes
 * with any custom routes for the 'sponsor' content type.
 */

const sponsorRoutes = {
  routes: [
    // --- Default Core Routes for Collection Types (Explicitly Listed) ---
    // Find (get all entries)
    {
      method: 'GET',
      path: '/sponsors',
      handler: 'api::sponsor.sponsor.find',
      config: {
        auth: false, // Keep as false if publicly accessible
        policies: [],
        middlewares: [],
      },
    },
    // Find One (get a single entry by ID)
    {
      method: 'GET',
      path: '/sponsors/:id',
      handler: 'api::sponsor.sponsor.findOne',
      config: {
        auth: false, // Keep as false if publicly accessible
        policies: [],
        middlewares: [],
      },
    },
    // Create (create a new entry)
    {
      method: 'POST',
      path: '/sponsors',
      handler: 'api::sponsor.sponsor.create',
      config: {
        auth: {}, // <--- CHANGED from true to {}
        policies: [],
        middlewares: [],
      },
    },
    // Update (update an existing entry)
    {
      method: 'PUT',
      path: '/sponsors/:id',
      handler: 'api::sponsor.sponsor.update',
      config: {
        auth: {}, // <--- CHANGED from true to {}
        policies: [],
        middlewares: [],
      },
    },
    // Delete (delete an entry)
    {
      method: 'DELETE',
      path: '/sponsors/:id',
      handler: 'api::sponsor.sponsor.delete',
      config: {
        auth: {}, // <--- CHANGED from true to {}
        policies: [],
        middlewares: [],
      },
    },

    // --- Your Custom 'bulkCreate' Route ---
    {
      method: 'POST', // HTTP method for this endpoint
      path: '/sponsors/bulk-create', // The URL path for this custom endpoint
      handler: 'api::sponsor.sponsor.bulkCreate', // Points to the 'bulkCreate' method in your 'sponsor' controller
      config: {
        policies: [],
        middlewares: [],
        auth: {}, // <--- CHANGED from true to {}
      },
    },
  ],
};

export default sponsorRoutes;