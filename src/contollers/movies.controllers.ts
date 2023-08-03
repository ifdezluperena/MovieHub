import { Request,Response } from "express"
import { send } from "process"


 export const createMovie = (req: Request,res: Response) =>{

    res.status(200).send({msg:"Movie created"})
    
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