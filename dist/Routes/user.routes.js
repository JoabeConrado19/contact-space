"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../Controllers/users.controller");
const ensureIsValidData_middleware_1 = __importDefault(require("../Middlewares/ensureIsValidData.middleware"));
const users_serializers_1 = require("../Serializers/users.serializers");
const userRoutes = (0, express_1.Router)();
userRoutes.post("/", (0, ensureIsValidData_middleware_1.default)(users_serializers_1.requestUsersSerializer), users_controller_1.createUserController);
userRoutes.get("/", users_controller_1.listUsersController);
userRoutes.patch("/:id", users_controller_1.UpdateUserController);
userRoutes.delete("/:id", users_controller_1.deleteUserController);
exports.default = userRoutes;
