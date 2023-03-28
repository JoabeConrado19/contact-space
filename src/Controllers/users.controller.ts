import { Request, Response } from "express";
import { IUserLogin, IUserRequest, IUserUpdate } from "../Interfaces/Users";
import createSessionService from "../Services/Session/createSession.service";
import { createUserService } from "../Services/Users/createUser.service";
import deleteUserService from "../Services/Users/deleteUser.service";
import { listUserService } from "../Services/Users/listUser.service";
import { updateUserService } from "../Services/Users/uptadeUser.service";




export const createUserController = async (req: Request, res: Response) => {

    const userData: IUserRequest = req.body;
    const token = await createUserService(userData);
    return res.status(201).json({token});
};

export const listUsersController = async (req: Request, res: Response) => {
    const users = await listUserService()
    return res.status(200).json(users)
}

export const UpdateUserController = async (req: Request, res: Response) => {
    const userParamsId: string = req.params.userId
    const userData: IUserUpdate = req.body
    const updatedUser = await updateUserService(userData, userParamsId)
    return res.json(updatedUser)
}

export const deleteUserController = async (req: Request, res: Response) => {

    await deleteUserService(req.params.id)
    return res.status(204).json({})
}