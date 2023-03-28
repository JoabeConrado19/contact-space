import dataSource from '../../data-source';
import Contacts from '../../Entities/contacts.entity';
import AppError from '../../errors';
import { IContactRequest, IContactResponse } from '../../Interfaces/Contacts';
import Users from './../../Entities/users.entity';
import { IUserRequest, IUserResponse } from './../../Interfaces/Users/index';

export const contactAppendService = async (userData: IContactRequest, userId: any) => {


    const contactRepo = dataSource.getRepository(Contacts);
    const userRepo = dataSource.getRepository(Users);

    const searchUserById = await userRepo.findOneBy({id: userId});
    if (!searchUserById){
        throw new AppError("Token error", 409);
    };

    if(parseInt(userData.telephone).toString().length < 11){
        throw new AppError("Telephone must contains only numbers", 400);
    }


    const contact = contactRepo.create(userData);
    contact.user = searchUserById
    await contactRepo.save(contact);

    return contact;
}; 