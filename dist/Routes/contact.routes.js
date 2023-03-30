"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controllers_1 = require("../Controllers/contact.controllers");
const ensureAuth_middleware_1 = __importDefault(require("../Middlewares/ensureAuth.middleware"));
const ensureIsValidData_middleware_1 = __importDefault(require("../Middlewares/ensureIsValidData.middleware"));
const contact_serializers_1 = require("../Serializers/contact.serializers");
const contactRoutes = (0, express_1.Router)();
contactRoutes.post("/", ensureAuth_middleware_1.default, (0, ensureIsValidData_middleware_1.default)(contact_serializers_1.requestContactSerializer), contact_controllers_1.createContactController);
contactRoutes.delete("/:id", ensureAuth_middleware_1.default, contact_controllers_1.deleteContactController);
contactRoutes.patch("/:id", ensureAuth_middleware_1.default, contact_controllers_1.updateContactController);
exports.default = contactRoutes;
