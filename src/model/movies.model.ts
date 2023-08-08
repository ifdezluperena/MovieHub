import { Date, Document, Number, Schema, model } from "mongoose"

interface IMoviesDocument extends Document{

    name : string,
    url: string,
    score : Number,
    createdAt : Date,
    updatedAt : Date

} 

const MoviesSchema = new Schema<IMoviesDocument>({

    name : {
        type : String,
        required : [true , 'Name is required'],
        unique : true
    },
    url : {
        type : String, 
        required : true,
        unique : true
    },
    score : {
        type : Number,
        required : [true , 'Year is required']
    }
},{timestamps:true, versionKey:false})

const MoviesModel = model<IMoviesDocument>("Movies", MoviesSchema)

export default MoviesModel