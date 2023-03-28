import { hashSync } from 'bcryptjs';
import dataSource from "../../data-source";
import { IReqUser } from '../../Interfaces/Session';
import { IUserResponse, IUserUpdate } from "../../Interfaces/Users";
import { responseUsersSerializer } from "../../Serializers/users.serializers";
import Users from '../../Entities/users.entity';
import AppError from '../../errors';
import Contacts from '../../Entities/contacts.entity';

export const updateContactService = async (userData:any, userParamsId: number) => {
    const contactRepo = dataSource.getRepository(Contacts);

    if (userData.email) {
        const searchUserByEmail = await contactRepo.findOneBy({ email: userData.email });
        if (searchUserByEmail) {
            throw new AppError("Email already exists", 409);
        };
    }

    if (userData.telephone) {
        const searchUserByTelephone = await contactRepo.findOneBy({ telephone: userData.telephone });
        if (searchUserByTelephone) {
            throw new AppError("Telephone number already exists", 409);
        };
        if (parseInt(userData.telephone).toString().length < 11) {
            throw new AppError("Telephone must contains only numbers", 400);
        }
    }


    const findContact = await contactRepo.findOneBy({
        id: userParamsId
    })


    const updateContact = {
        ...findContact,
        ...userData
    }


    await contactRepo.update({ id: userParamsId }, updateContact)

    return updateContact
}