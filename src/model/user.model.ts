import { Document, Schema, Types, model } from "mongoose"

interface IUserDocument extends Document{

    name : string,
    email : string,
    password : string,
    movies? : string[]
    createdAt : Date,
    updatedAt : Date

} 

const userSchema = new Schema<IUserDocument>({

    name : {
        type : String,
        required : [true , 'Name is required']
    },
    email : {
        type : String, 
        required : [true, 'Email is required'],
        unique : true
    },
    password : {
        type : String,
        required : [true , 'Password is required']
        //Mas adelante se le agregara algu tipo de validacion
    },
    movies : {
        type : [{types : Schema.Types.ObjectId},{ref : "Movies"}] //Importante que la referencia de Movies coincida con la de su modelo

    }
    

},{timestamps:true, versionKey:false}) //versionkey es un campo que se agrega automaticamente a nuestro proyecto, _V, es por tema de compatibilidad, en nuestro proyecto no pasa nada por ponerlo en falso

const UserModel = model<IUserDocument>("User", userSchema)

export default UserModel