"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedUserSerializer = exports.usersWithoutPasswordSerializer = exports.requestUsersSerializer = exports.responseUsersSerializer = void 0;
const yup = __importStar(require("yup"));
exports.responseUsersSerializer = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
    telephone: yup.string(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    contacts: yup.array()
});
exports.requestUsersSerializer = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'A senha precisa ter no mínimo 8 caracteres, ' +
        'uma letra maiúscula e uma letra minúscula, ' +
        'um número e um caracter especial'),
    telephone: yup.string().required(),
});
exports.usersWithoutPasswordSerializer = yup.array(exports.responseUsersSerializer);
exports.updatedUserSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'A senha precisa ter no mínimo 8 caracteres, ' +
        'uma letra maiúscula e uma letra minúscula, ' +
        'um número e um caracter especial'),
    telephone: yup.string().notRequired()
});
