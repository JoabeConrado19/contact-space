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
exports.contactAppendService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const contacts_entity_1 = __importDefault(require("../../Entities/contacts.entity"));
const errors_1 = __importDefault(require("../../errors"));
const users_entity_1 = __importDefault(require("./../../Entities/users.entity"));
const contactAppendService = (userData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.default.getRepository(contacts_entity_1.default);
    const userRepo = data_source_1.default.getRepository(users_entity_1.default);
    const searchUserById = yield userRepo.findOneBy({ id: userId });
    if (!searchUserById) {
        throw new errors_1.default("Token error", 409);
    }
    ;
    if (parseInt(userData.telephone).toString().length < 11) {
        throw new errors_1.default("Telephone must contains only numbers", 400);
    }
    const contact = contactRepo.create(userData);
    contact.user = searchUserById;
    yield contactRepo.save(contact);
    return contact;
});
exports.contactAppendService = contactAppendService;
