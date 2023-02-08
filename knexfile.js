const path = require("path");
require("dotenv").config();
const DATABASE_URL = 
  process.env.NODE_ENV === "development" ?
    process.env.DATABASE_URL_DEV :
    process.env.DATABASE_URL_PROD
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: DATABASE_URL,
    //telling knex where to put migration files
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    //telling knex where to put seed files
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
  },

  production: {
    client: 'pg',
    connection: DATABASE_URL,
    //telling knex where to put migration files
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    //telling knex where to put seed files
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
  }
};