import { Request, Response } from "express"
import prisma from "../db/clientPrisma";

export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;
    console.log(name)
    try {

        if (!name || !email || !password) {

            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const newUser = await prisma.user.create({

            data: {
                name: name,
                email: email,
                password: password
            }

        }) // una vez creado el usuario esto nos va a devolver los datos del usuario en mongo, y ya los podriamos manipular o mandar al usuario por ejemplo

        res.status(200).send(newUser)

    } catch (error) {

        res.status(500).send(error)
    }

}

export const getAllUsers = async (req: Request, res: Response) => {

    try {

        const allUsers = await prisma.user.findMany()

        res.status(200).send(allUsers)

    } catch (error) {

        res.status(500).send(error)
    }
}

export const getUserById = async (req: Request, res: Response) => {

    const { userId } = req.params;

    try {

        const user = await prisma.user.findUnique({

            where: {

                id: userId //Le decimos que cuando el id sea igual al userId nos lo traiga
            },
            include: {
                movies: {
                    select: {
                        name: true,
                        genre: true
                    }
                } // que me incluya las peliculas asociadas a ese usuario, pero que muestre solamente el nombre de la pelicula
            }
        })

        res.status(200).send(user);

    } catch (error) {

        res.status(500).send(error)
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { userId } = req.params;

    const { name, email, password } = req.body;

    try {


        const updatedUser = await prisma.user.update({

            where: {

                id: userId
            },
            data: {

                name: name,
                email: email,
                password: password
            }
        })
        res.status(200).send(updatedUser)

    } catch (error) {

        res.status(500).send(error)
    }

}

export const removeUser = async (req: Request, res: Response) => {

    const { userId } = req.params;

    try {

        await prisma.user.delete({ // Aqui no haria falta meterlo en una constante porque prisma no nos va a devolver el usuario borrado, simplemente te devuelve los elementos borrados, si ha sido uno pues te devolvera 1

            where: {

                id: userId
            }
        })

        res.status(204).send('User was deleted')

    } catch (error) {

        res.status(500).send(error)
    }

} 