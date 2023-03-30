"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const errors_1 = __importDefault(require("../../errors"));
const contacts_entity_1 = __importDefault(require("../../Entities/contacts.entity"));
const updateContactService = (userData, userParamsId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.default.getRepository(contacts_entity_1.default);
    if (userData.email) {
        const searchUserByEmail = yield contactRepo.findOneBy({ email: userData.email });
        if (searchUserByEmail) {
            throw new errors_1.default("Email already exists", 409);
        }
        ;
    }
    if (userData.telephone) {
        const searchUserByTelephone = yield contactRepo.findOneBy({ telephone: userData.telephone });
        if (searchUserByTelephone) {
            throw new errors_1.default("Telephone number already exists", 409);
        }
        ;
        if (parseInt(userData.telephone).toString().length < 11) {
            throw new errors_1.default("Telephone must contains only numbers", 400);
        }
    }
    const findContact = yield contactRepo.findOneBy({
        id: userParamsId
    });
    const updateContact = Object.assign(Object.assign({}, findContact), userData);
    yield contactRepo.update({ id: userParamsId }, updateContact);
    return updateContact;
});
exports.updateContactService = updateContactService;
