import express, { Express, Response } from 'express';
import MovieRoutes from './routes/movies.routes';
import UsersRoutes from './routes/users.routes';
import GenreRoutes from './routes/genres.routes';
import morgan from 'morgan'

const app: Express = express();

app.use(express.json) //para que express sepa cuando le mando informacion en el body de nuestra peticion, que lea el formato
app.use(morgan("dev"))
app.get("/", (req, res) => {
    res.status(200).send("hola")
})

app.use("/movies", MovieRoutes)
app.use("/users", UsersRoutes)
app.use("/genres", GenreRoutes)


export default app

