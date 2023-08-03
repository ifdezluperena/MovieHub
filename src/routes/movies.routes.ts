// encargado de definir el vervo de la accion teniendo en cuenta la url, es decir que se va a ejecutar en funcion de la dependencia que tenga
import {createMovie, updateMovie, removeMovie, getAllMovies, getMovieById} from '../contollers/movies.controllers'
import { Router } from "express";

const MovieRouter = Router();

MovieRouter.post("/", createMovie);

MovieRouter.patch("/", updateMovie);

MovieRouter.delete("/", removeMovie);

MovieRouter.get("/", getMovieById);

MovieRouter.get("/", getAllMovies);

const userRouter = Router();



export default MovieRouter