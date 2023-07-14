import express from 'express';
import bodyParser from 'body-parser';
import user from './controller/user.controller';

const app = express();
app.use(bodyParser.json());
app.use('/user', user);

app.use((err, req, res, next)=>{
    res.send(err.message);
})

export default app;

/* import express from 'express';
import bodyParser from 'body-parser';
import user from "../src/controller/user.controller"

const app = express();
app.use(bodyParser.json());
app.use('/user', user);

app.use((err, req, res, next)=>{
    res.send(err.message);
})

export default app */