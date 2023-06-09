import dataSource from "../../data-source";
import { IUserResponse } from "../../Interfaces/Users";
import { usersWithoutPasswordSerializer } from "../../Serializers/users.serializers";
import Users from './../../Entities/users.entity';

export const listUserService = async (): Promise<IUserResponse[]> => {

    const userRepo = dataSource.getRepository(Users);

    const users = await userRepo.find({
        relations:{contacts:true}
    });

    const correctUsersFormat:any = usersWithoutPasswordSerializer.validate(users, {
        stripUnknown: true
    });
    return correctUsersFormat;
}