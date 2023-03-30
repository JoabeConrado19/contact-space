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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = require("bcryptjs");
require("dotenv/config");
const errors_1 = __importDefault(require("../../errors"));
const data_source_1 = __importDefault(require("../../data-source"));
const users_entity_1 = __importDefault(require("../../Entities/users.entity"));
const createSessionService = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const searchUser = yield userRepository.find({
        withDeleted: true,
        where: { email: email }
    });
    if (searchUser.length === 0) {
        throw new errors_1.default("Invalid user or password!", 403);
    }
    ;
    const passwordMatch = yield (0, bcryptjs_1.compare)(String(password), searchUser[0].password);
    if (!passwordMatch) {
        throw new errors_1.default("Invalid user or password!", 403);
    }
    ;
    const token = jsonwebtoken_1.default.sign({
        email: searchUser[0].email,
        id: searchUser[0].id,
    }, process.env.SECRET_KEY, {
        subject: String(searchUser[0].id),
        expiresIn: '24h'
    });
    return token;
});
exports.default = createSessionService;
