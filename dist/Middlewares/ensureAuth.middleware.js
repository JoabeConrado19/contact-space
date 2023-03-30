"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ensureAuthMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        throw new errors_1.default("Missing authorization headers", 401);
    }
    ;
    const token = authorization.split(" ")[1];
    return jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new errors_1.default("Missing authorization headers", 401);
        }
        ;
        req.user = {
            id: decoded.sub
        };
        return next();
    });
};
exports.default = ensureAuthMiddleware;
