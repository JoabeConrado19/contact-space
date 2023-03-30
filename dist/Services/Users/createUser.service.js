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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const errors_1 = __importDefault(require("../../errors"));
const users_entity_1 = __importDefault(require("./../../Entities/users.entity"));
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(users_entity_1.default);
    const searchUserByEmail = yield userRepo.findOneBy({ email: userData.email });
    if (searchUserByEmail) {
        throw new errors_1.default("Email already exists", 409);
    }
    ;
    const searchUserByTelephone = yield userRepo.findOneBy({ telephone: userData.telephone });
    if (searchUserByTelephone) {
        throw new errors_1.default("Telephone must contains only numbers", 400);
    }
    ;
    if (parseInt(userData.telephone).toString().length < 11) {
        throw new errors_1.default("Telephone must contains only numbers", 400);
    }
    const user = userRepo.create(userData);
    yield userRepo.save(user);
    const { password } = user, userWithoutPassword = __rest(user, ["password"]);
    return userWithoutPassword;
});
exports.createUserService = createUserService;
