// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgrsql:///cats'
    
    
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
