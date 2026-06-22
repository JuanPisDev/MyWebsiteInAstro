import pkg from 'pg';

const { Pool } = pkg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'portfolio',
    password: 'killershadowinternet',
    port:5432
});