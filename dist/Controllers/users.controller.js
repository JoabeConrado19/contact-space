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
exports.deleteUserController = exports.UpdateUserController = exports.listUsersController = exports.createUserController = void 0;
const createUser_service_1 = require("../Services/Users/createUser.service");
const deleteUser_service_1 = __importDefault(require("../Services/Users/deleteUser.service"));
const listUser_service_1 = require("../Services/Users/listUser.service");
const uptadeUser_service_1 = require("../Services/Users/uptadeUser.service");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const token = yield (0, createUser_service_1.createUserService)(userData);
    return res.status(201).json({ token });
});
exports.createUserController = createUserController;
const listUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, listUser_service_1.listUserService)();
    return res.status(200).json(users);
});
exports.listUsersController = listUsersController;
const UpdateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userParamsId = req.params.userId;
    const userData = req.body;
    const updatedUser = yield (0, uptadeUser_service_1.updateUserService)(userData, userParamsId);
    return res.json(updatedUser);
});
exports.UpdateUserController = UpdateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteUser_service_1.default)(req.params.id);
    return res.status(204).json({});
});
exports.deleteUserController = deleteUserController;
