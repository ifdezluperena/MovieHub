// encargado de definir el vervo de la accion teniendo en cuenta la url, es decir que se va a ejecutar en funcion de la dependencia que tenga

import { createMovie, updateMovie, removeMovie, getAllMovies, getMovieById } from '../contollers/movies.controllers'
import { Router } from "express";
import { check } from '../middleware/check.middleware';

const MovieRoutes = Router();

MovieRoutes
    .post("/:userId", check, createMovie) // Seguido del middleware check, podemos poner cuantos mas queramos, es mejor que los middleware sean especificos y crear mas , en vez dde hacer uno que compruebe varias condisiones

    .patch("/:movieId", updateMovie)

    .delete("/:movieId", removeMovie)

    .get("/:movieId", getMovieById)

    .get("/", getAllMovies);

export default MovieRoutes