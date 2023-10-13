import pool from "../db"
import { iCourse } from "../interfaces/index"

async function getCourseDB(): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM courses`;
    const result = (await client.query(sql)).rows;
     await client.release();
    return result;
}

async function getCourseByIdDB(id:number): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM courses WHERE id=$1`;
    const data = (await client.query(sql, [id])).rows;
     await client.release();
    return data;
}
async function deleteCourseByIdDB(id:number): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `DELETE FROM courses WHERE id=$1 RETURNING *`;
    const data = (await client.query(sql, [id])).rows;
     await client.release();
    return data;
}
async function createCourseDB(course: string, description:string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");
        const sql = `INSERT INTO courses (course, description) VALUES ($1,$2) RETURNING *`;
        const data = (await client.query(sql, [course, description])).rows;
        await client.query("COMMIT")
        return data;
    } catch (error:any) {
        await client.release();
        await client.query("ROLLBACK");
        return [];
    }
}
async function updateCourseDB(id: string, course: string, description:string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `UPDATE courses SET course = $1, description = $2 WHERE id = $3 RETURNING *`;
    const result = (await client.query(sql, [course, description, id])).rows;
    await client.release();
    return result;

}
export { getCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB }