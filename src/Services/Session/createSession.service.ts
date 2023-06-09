import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import 'dotenv/config'
import AppError from '../../errors'
import dataSource from '../../data-source'
import { IUserLogin } from '../../Interfaces/Users'
import Users from '../../Entities/users.entity'

const createSessionService = async ( { email, password }: IUserLogin ) => {

    const userRepository = dataSource.getRepository(Users);
    
    const searchUser = await userRepository.find({
        withDeleted: true,
        where: {email: email}
    });

    if(searchUser.length === 0){
       throw new AppError("Invalid user or password!", 403);
    };



    const passwordMatch = await compare(String(password), searchUser[0].password);
    if(!passwordMatch){
        throw new AppError("Invalid user or password!", 403);
    };

    const token = jwt.sign(
        {
            email: searchUser[0].email,
            id: searchUser[0].id,

        },
        process.env.SECRET_KEY!,
        {
            subject: String(searchUser[0].id), 
            expiresIn: '24h'
        }
    );
    return token;
};

export default createSessionService;