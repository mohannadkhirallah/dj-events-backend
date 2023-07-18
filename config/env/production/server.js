/* ./config/env/production/server.js */
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'app-strapi-portal-dev.azurewebsites.net',
});
