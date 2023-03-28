import dataSource from "../../data-source";
import Users from "../../Entities/users.entity";
import AppError from "../../errors";



const deleteUserService = async (userId: string) => {
    const userRepository = dataSource.getRepository(Users);

    const findUser = await userRepository.findOneBy({ id: userId });

    if(!findUser){
        throw new AppError("Not Found", 404);
    }


    await userRepository.save(findUser);

    await userRepository.remove(findUser);

    return {};
};
export default deleteUserService;
