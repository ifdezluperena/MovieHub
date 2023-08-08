import { Router } from "express";
import { createUser, getAllUsers, getUserById, removeUser, updateUser } from "../contollers/users.controller";

const UsersRoutes = Router();

UsersRoutes

    .post("/", createUser)
    
    .get("/", getAllUsers)

    .get("/:userId", getUserById)

    .put("/:userId", updateUser)

    .delete("/:userId", removeUser)


export default UsersRoutes