import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, UpdateUserController } from "../Controllers/users.controller";
import ensureIsValidDataMiddleware from "../Middlewares/ensureIsValidData.middleware";
import {requestUsersSerializer} from '../Serializers/users.serializers'


const userRoutes = Router();

userRoutes.post("/", ensureIsValidDataMiddleware(requestUsersSerializer), createUserController);
userRoutes.get("/", listUsersController);
userRoutes.patch("/:id", UpdateUserController);
userRoutes.delete("/:id", deleteUserController)



export default userRoutes;