import pool from "../db"
import { iCourse } from "../interfaces/index"

async function getCourseDB(): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM courses`;
    const result = (await client.query(sql)).rows;
    return result;
}

async function getCourseByIdDB(id): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM courses WHERE id=$1`;
    const data = (await client.query(sql, [id])).rows;
    return data;
}
async function deleteCourseByIdDB(id): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `DELETE FROM courses WHERE id=$1 RETURNING *`;
    const data = (await client.query(sql, [id])).rows;
    return data;
}
async function createCourseDB(course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");
        const array:iCourse[] = await getCourseDB();
        const sql = `INSERT INTO courses (course) VALUES ($1) RETURNING *`;
        const data = (await client.query(sql, [course])).rows;
        array.forEach(element => {
            console.log(element);
            console.log(course);

            if (element.course == course) throw new Error(`this course already exists`);
        });
        await client.query("COMMIT")
        return data;
    } catch (error:any) {
        await client.query("ROLLBACK");
        return [];
    }
}
async function updateCourseDB(id: number, course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `UPDATE courses SET course = $1 WHERE id = $2 RETURNING *`;
    const result = (await client.query(sql, [id, course])).rows;
    return result;

}
export { getCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB }