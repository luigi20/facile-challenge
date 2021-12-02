module.exports = {

  production: {
    client: process.env.CLIENT,
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      url: process.env.DATABASE_URL,
      host: process.env.HOST,
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },
  development: {
    client: 'pg',
    connection: {
      database: 'encrypted',
      user: 'postgres',
      password: '4l9u2i7s',
      host: 'localhost',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }

};