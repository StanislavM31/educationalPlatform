import request from "supertest"
import app from "../../src/app"
let id;

test('POST', async () => {
    const res = await request(app).post('/user').send({ name: "test_userqw", surname: "test_asdf", email: "test_user_asdf_email@gmail.com", pwd: "12345" });
    id = res.body[0].id
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: id, name: "test_userqw", surname: "test_asdf", email: "test_user_asdf_email@gmail.com", pwd: "12345" }])
})

test('GET', async () => {
    const res = await request(app).get('/user');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(1);
})

test('GET/:id', async () => {
    const res = await request(app).get(`/user/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test('UPDATE', async () => {
    const res = await request(app).put(`/user/${id}`).send({ name: "test_user_updated", surname: "test_asdf", email: "test_user_asdf_email@gmail.com", pwd: "12345_updated" });
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ name: "test_user_updated", surname: "test_asdf", email: "test_user_asdf_email@gmail.com", pwd: "12345_updated", id: id }])
})

test("DELETE", async () => {
    const res = await request(app).delete(`/user/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: id, name: "test_user_updated", surname: "test_asdf", email: "test_user_asdf_email@gmail.com", pwd: "12345_updated" }])
})