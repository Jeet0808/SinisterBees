import pg from 'pg';

const pgdb = new pg.Pool({
  user: 'postgres',
  host: 'db',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

pgdb.on('acquire', () => {
  console.log('connected to the database ');
});

export default pgdb;
