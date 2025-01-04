module.exports = {
  appName: 'SinisterBEES (production)',
  logLevel: 'debug',
  port: 5000,
  logging : true,
  httplogging : true,
  
  frontend: {
    port: 5174,
  },
  db: {
    host: 'localhost',
    port: 5432,
    user: 'dev_user',
    password: 'dev_password',
    name: 'dev_database',
  },
};
