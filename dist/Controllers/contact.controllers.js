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
exports.updateContactController = exports.deleteContactController = exports.createContactController = void 0;
const contactAppend_service_1 = require("../Services/Contact/contactAppend.service");
const contactDelete_service_1 = __importDefault(require("../Services/Contact/contactDelete.service"));
const uptadeContact_service_1 = require("../Services/Contact/uptadeContact.service");
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const userId = req.user.id;
    const Contact = yield (0, contactAppend_service_1.contactAppendService)(userData, userId);
    return res.status(200).json(Contact);
});
exports.createContactController = createContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const Contact = yield (0, contactDelete_service_1.default)(userId);
    return res.status(204).json({});
});
exports.deleteContactController = deleteContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const userId = req.params.id;
    const Contact = yield (0, uptadeContact_service_1.updateContactService)(userData, userId);
    return res.status(201).json(Contact);
});
exports.updateContactController = updateContactController;
