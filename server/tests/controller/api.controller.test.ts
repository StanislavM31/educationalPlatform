import request from 'supertest'
import app from "../../src/app"
let id: any;
let hash_pwd: string;

test('POST', async () => {
    const res = await request(app).post(`/api/registration`).send({ name: "Sam1", surname: "ff", email: "sam_ff@gmail.com", pwd: "12345" });
    console.log(res.body[0]);

    id = res.body[0].id;
    hash_pwd = res.body[0].pwd;
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test("GET/:id", async () => {
    const res = await request(app).get(`/api/registration/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
        { id: id, name: "Sam1", surname: "ff", email: "sam_ff@gmail.com", pwd: hash_pwd }
    ])
})
test('DELETE', async () => {
    const res = await request(app).delete(`/api/registration/${id}`);
    expect(res.status).toBe(200);
    console.log(res.body);
    expect(res.body).toEqual([{ id: id, name: "Sam1", surname: "ff", email: "sam_ff@gmail.com", pwd: hash_pwd }])
})