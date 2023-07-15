import pool from '../db';
import { iUser } from '../interfaces';

async function registrationDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO users (name, surname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING *`;
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query("ROLLBACK");
        return [];
    }
}
async function getByEmail(email: string): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM users WHERE email = $1`;
    const result = (await client.query(sql, [email])).rows;
    return result
}


export { registrationDB, getByEmail };