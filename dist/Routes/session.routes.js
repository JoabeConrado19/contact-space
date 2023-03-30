"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_controllers_1 = require("../Controllers/session.controllers");
const ensureIsValidData_middleware_1 = __importDefault(require("../Middlewares/ensureIsValidData.middleware"));
const session_serializers_1 = require("../Serializers/session.serializers");
const sessionRoutes = (0, express_1.Router)();
sessionRoutes.post("/", (0, ensureIsValidData_middleware_1.default)(session_serializers_1.requestLoginSerializer), session_controllers_1.createSessionController);
exports.default = sessionRoutes;
