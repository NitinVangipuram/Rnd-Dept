module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://rnd.iitdh.ac.in/strapi'),
  admin: {
    path: '/strapi/admin',
    url: 'https://rnd.iitdh.ac.in/strapi/admin', // Explicitly set admin URL
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
