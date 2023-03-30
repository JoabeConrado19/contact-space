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
exports.updateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = __importDefault(require("../../data-source"));
const users_serializers_1 = require("../../Serializers/users.serializers");
const users_entity_1 = __importDefault(require("../../Entities/users.entity"));
const errors_1 = __importDefault(require("../../errors"));
const updateUserService = (userData, userParamsId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(users_entity_1.default);
    if (userData.email) {
        const searchUserByEmail = yield userRepo.findOneBy({ email: userData.email });
        if (searchUserByEmail) {
            throw new errors_1.default("Email already exists", 409);
        }
        ;
    }
    if (userData.telephone) {
        const searchUserByTelephone = yield userRepo.findOneBy({ telephone: userData.telephone });
        if (searchUserByTelephone) {
            throw new errors_1.default("Telephone number already exists", 409);
        }
        ;
        if (parseInt(userData.telephone).toString().length < 11) {
            throw new errors_1.default("Telephone must contains only numbers", 400);
        }
    }
    const findUser = yield userRepo.findOneBy({
        id: userParamsId
    });
    if (userData.password) {
        userData.password = (0, bcryptjs_1.hashSync)(userData.password, 10);
    }
    ;
    const updatedUser = Object.assign(Object.assign({}, findUser), userData);
    yield userRepo.update({ id: userParamsId }, updatedUser);
    const updatedUserWithoutPassword = yield users_serializers_1.responseUsersSerializer.validate(updatedUser, {
        stripUnknown: true
    });
    return updatedUserWithoutPassword;
});
exports.updateUserService = updateUserService;
