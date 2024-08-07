import pg from 'pg';
const { Pool } = pg;

const port : number = parseInt(process.env.PGPORT as string);

// console.log( port );

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: port,
    database: process.env.PGDATABASE,
});

export const query = (text: string, params: Array<any>) => {
    return pool.query(text, params);
}