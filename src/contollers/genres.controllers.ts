import { Request, Response } from "express"
import prisma from "../db/clientPrisma"

export const getAllGenres = async (req: Request, res: Response) => {

    try {

        const allGenres = await prisma.genres.findMany()

        res.status(200).send(allGenres)

    } catch (error) {

        res.status(500).send(error)
    }
}

export const getGenreById = async (req: Request, res: Response) => {

    const { genreId } = req.params;

    const { name } = req.body

    try {

        const genreById = await prisma.genres.findUnique({

            where: {

                id: genreId
            },
            include: {
                Movie: {
                    select: {
                        name: true
                    }
                }
            }

        })

        res.status(200).send(genreById)
    } catch (error) {

        res.status(500).send(error)
    }

}