import dataSource from "../../data-source";
import Contacts from "../../Entities/contacts.entity";
import Users from "../../Entities/users.entity";
import AppError from "../../errors";



const deleteContactService = async (id: number) => {
    const contactRepository = dataSource.getRepository(Contacts);

    const findContact = await contactRepository.findOneBy({ id: id });

    if(!findContact){
        throw new AppError("Not Found", 404);
    }

    await contactRepository.remove(findContact);

    return {};
};
export default deleteContactService;
