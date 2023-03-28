import { Request, Response } from "express";
import { IContactRequest } from "../Interfaces/Contacts";
import { contactAppendService } from "../Services/Contact/contactAppend.service";
import deleteContactService from "../Services/Contact/contactDelete.service";
import { updateContactService } from "../Services/Contact/uptadeContact.service";

export const createContactController = async (req: any, res: Response) => {
    const userData: IContactRequest = req.body;
    const userId= req.user.id
    const Contact = await contactAppendService(userData, userId);
    return res.status(200).json(Contact);
};

export const deleteContactController = async (req: any, res: Response) => {
    const userId= req.params.id
    const Contact = await deleteContactService(userId);
    return res.status(204).json({});
};

export const updateContactController = async (req: any, res: Response) => {
    const userData: IContactRequest = req.body;
    const userId= req.params.id
    const Contact = await updateContactService(userData, userId);
    return res.status(201).json(Contact);
};