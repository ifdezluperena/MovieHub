import { Request, Response } from "express"
import { send } from "process"
import prisma from "../db/clientPrisma";


export const createMovie = async (req: Request, res: Response) => {

    const { name, url, score } = req.body;

    const { userId } = req.params;

    try {

        const newMovie = await prisma.movie.create({

            data: {
                name: name,
                url: url,
                score: score,
                User: {
                    connect: {
                        id: userId
                    }
                }

            }
        });

        res.status(201).send(newMovie)

    } catch (error) {

        res.status(500).send(error)
    }

}

export const updateMovie = async (req: Request, res: Response) => {

    const { movieId } = req.params;

    const { name, url, score } = req.body;

    try {

        const updatedMovie = await prisma.movie.update({

            where: {

                id: movieId
            },
            data: {
                name: name,
                url: url,
                score: score
            }
        })



        res.status(200).send(updatedMovie)

    } catch (error) {

        res.status(500).send(error)
    }

}

export const removeMovie = async (req: Request, res: Response) => {

    const { movieId } = req.params;

    try {

        await prisma.movie.delete({

            where: {

                id: movieId
            }
        })

        res.status(200).send("Movie was deleted")

    } catch (error) {

        res.status(500).send(error)
    }
}

export const getAllMovies = async (req: Request, res: Response) => {


    try {

        const allMovies = await prisma.movie.findMany()


        res.status(201).send(allMovies)

    } catch (error) {

        res.status(500).send(error)
    }
}

export const getMovieById = async (req: Request, res: Response) => {

    const { movieId } = req.params;

    try {

        const movieById = await prisma.movie.findUnique({

            where: {
                id: movieId
            },
            include: {
                genre: {
                    select: {
                        name: true
                    }
                }
            }
        })

        res.status(200).send(movieById)

    } catch (error) {

        res.status(500).send(error)

    }

}