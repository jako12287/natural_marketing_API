"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const secretKey = config_1.SECRET_TOKEN;
const generateToken = (userId) => {
    const payload = { userId };
    const token = jsonwebtoken_1.default.sign(payload, secretKey);
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const decode = jsonwebtoken_1.default.verify(token, secretKey);
    if (!decode)
        return null;
    return decode;
};
exports.verifyToken = verifyToken;
