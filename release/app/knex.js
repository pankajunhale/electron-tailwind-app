// Update with your config settings.
//const path = require('path');
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.db',
    },
    useNullAsDefault: true,
    log: {
      warn(message) {},
      error(message) {
        console.error(message);
      },
      deprecate(message) {},
      debug(message) {},
    },
    debug: true,
    migrations: {
      directory: './migrations/users.js',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: './prod.db',
    },
    useNullAsDefault: true,
    log: {
      warn(message) {},
      error(message) {
        console.error(message);
      },
      deprecate(message) {},
      debug(message) {},
    },
    debug: true,
    migrations: {
      directory: ['./migrations/users.js'],
    },
    seeds: {
      directory: './seeds',
    },
  },
};
