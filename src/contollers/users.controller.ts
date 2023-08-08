import { Request, Response } from "express"
import UserModel from "../model/user.model";
import { set } from "mongoose";
import prisma from "../db/ClientPrisma";


export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;

    try {

        if (!name || email || password) {

            res.status(400).json({ eror: "Missing required fields" });
            return;
        }

        const newUser = await prisma.user.create({

            data: {
                name,
                email,
                password
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

        const user = await UserModel.findById({ _id: userId }).populate("movies");

        res.status(200).send(user);

    } catch (error) {

        res.status(500).send(error)
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { userId } = req.params;

    const { name, email, password } = req.body;

    try {

        const updatedUser = await UserModel.findByIdAndUpdate({ _id: userId },// una vez creado el usuario esto nos va a devolver los datos del usuario en mongo, y ya los podriamos manipular o mandar al usuario por ejemplo

            {
                $set: {

                    name: name,
                    email: email,
                    password: password,

                }
            }, { new: true }) // la propiedad new se pone en true para asegurar de que devuelva el objeto una vez ya actualizado

        res.status(200).send(updatedUser)

    } catch (error) {

        res.status(500).send(error)
    }

}

export const removeUser = async (req: Request, res: Response) => {

    const { userId } = req.params;



    try {

        const userDeleted = await UserModel.findByIdAndDelete(userId) // una vez creado el usuario esto nos va a devolver los datos del usuario en mongo, y ya los podriamos manipular o mandar al usuario por ejemplo

        res.status(200).send(userDeleted)

    } catch (error) {

        res.status(500).send(error)
    }

} 