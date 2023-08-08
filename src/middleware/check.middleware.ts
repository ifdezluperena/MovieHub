import {Request, Response, NextFunction} from 'express';

export const check = (req:Request,res:Response, next:NextFunction) =>{

    const {name} = req.body;
    
    if (name.length< 2){

        res.status(400).send({error:"Name must be at least 2 characteres"})

        return;
    }

    next(); // Esta funcion lo que hace es decir que lo que venga despues que se ejecuque
}