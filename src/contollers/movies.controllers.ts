import { Request,Response } from "express"
import { send } from "process"
import MoviesModel from "../model/movies.model";
import UserModel from "../model/user.model";


 export const createMovie =  async (req: Request,res: Response) =>{

    const {name, url, score} = req.body;

    const {userId} = req.params;

    try{

        const newMovie = await MoviesModel.create({

            name,
            url,
            score
        });

        await UserModel.findByIdAndUpdate({_id : userId},{

            $push : {
                movies : newMovie._id
            }
        },{new : true})

        res.status(201).send(newMovie)

    } catch (error){

        res.status(500).send(error)
    }
     
}

export const updateMovie = (req: Request,res: Response) =>{

    res.status(200).send({msg:"Movie updated"})
    
}

export const removeMovie = (req: Request,res: Response) =>{

        res.status(200).send({msg:"Movie removed"})
    
}

export const getAllMovies = (req: Request,res: Response) =>{

        res.status(200).send({msg: "All movies"})
    
}

export const getMovieById = (req: Request,res: Response) =>{

    res.status(200).send({msg: "Movie  by id"})
    
}