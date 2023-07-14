import {Pool} from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'EducationPlatform',
    password: '2020',
    port: 5432
})

export default pool;