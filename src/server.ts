import express, {Express} from 'express';
import MovieRouter from './routes/movies.routes';

const app: Express = express();

app.use(express.json) //para que express sepa cuando le mando informacion en el body de nuestra peticion, que lea el formato

app.use("/movies",MovieRouter)

export default app
