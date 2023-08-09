import express, { Express } from 'express';
import MovieRoutes from './routes/movies.routes';
import UsersRoutes from './routes/users.routes';
import GenreRoutes from './routes/genres.routes';

const app: Express = express();

app.use(express.json) //para que express sepa cuando le mando informacion en el body de nuestra peticion, que lea el formato
// app.use(morgan("dev")) // nos da informacion sobre las peticiones

app.use("/movies", MovieRoutes)
app.use("/users", UsersRoutes)
app.use("/genres", GenreRoutes)


export default app

