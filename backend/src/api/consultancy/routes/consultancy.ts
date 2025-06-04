// Path: ./src/api/consultancy/routes/consultancy.ts
import { factories } from '@strapi/strapi'; // Not strictly needed for a simple routes file, but good practice

// This file defines ALL routes (core and custom) for the 'consultancy' content type.
// It REPLACES the default behavior of createCoreRouter.
export default {
  routes: [
    // --- Core Default Routes (Explicitly defined with Full UID Handlers) ---
    {
      method: 'GET',
      path: '/consultancies',
      handler: 'api::consultancy.consultancy.find', // Full UID format
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/consultancies/:id',
      handler: 'api::consultancy.consultancy.findOne', // Full UID format
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/consultancies',
      handler: 'api::consultancy.consultancy.create', // Full UID format
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/consultancies/:id',
      handler: 'api::consultancy.consultancy.update', // Full UID format
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/consultancies/:id',
      handler: 'api::consultancy.consultancy.delete', // Full UID format
      config: {
        policies: [],
      },
    },

    // --- Custom Route for Bulk Creation (now with Full UID Handler) ---
    {
      method: 'POST',
      path: '/consultancies/bulk-create',
      handler: 'api::consultancy.consultancy.bulkCreate', // Full UID format for consistency
      config: {
        policies: [],
        middlewares: [],
        auth: false, // Set to true if authentication is required
      },
    },
  ],
};