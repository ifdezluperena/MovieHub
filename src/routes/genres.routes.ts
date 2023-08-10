import { Router } from "express";
import { getAllGenres, getGenreById } from "../contollers/genres.controllers";

const GenreRoutes = Router();

GenreRoutes

    .get("/", getAllGenres)
    .get("/:genreId", getGenreById)

export default GenreRoutes