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
    const payload = { userId, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 };
    const token = jsonwebtoken_1.default.sign(payload, secretKey);
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (req, res) => {
    const { token } = req.body;
    try {
        jsonwebtoken_1.default.verify(token, secretKey);
        res.send({
            message: {
                en: "Authorized",
                es: "Autorizado",
            },
            data: { authorized: true },
        });
        return;
    }
    catch (error) {
        console.log({ error });
        res.send({
            message: {
                en: "Unauthorized",
                es: "No autorizado",
            },
            data: { authorized: false },
        });
        return;
    }
};
exports.verifyToken = verifyToken;
