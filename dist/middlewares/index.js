"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const secretKey = config_1.SECRET_TOKEN;
const authenticate = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }
    try {
        jsonwebtoken_1.default.verify(token, secretKey);
        return next();
    }
    catch (error) {
        res.status(403).json({ message: "Invalid token" });
        return;
    }
};
exports.authenticate = authenticate;
