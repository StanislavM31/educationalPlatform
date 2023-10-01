import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import user from './controller/user.controller';
import course from './controller/course.controller';
import  api  from './controller/api.controller';
import cors from "cors"
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', user);
app.use('/course', course);
app.use('/api', api);

app.use((err: { message: any; }, req: Request, res: Response, next: NextFunction)=>{
    res.send(err.message);
})

export default app;