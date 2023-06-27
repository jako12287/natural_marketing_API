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
exports.registerAdmin = exports.getAdmin = void 0;
const Admin_1 = __importDefault(require("../models/Admin"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = require("../config");
const getAdmin = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAdmin = yield Admin_1.default.find();
        res.send({ message: "get Administrators", data: getAdmin });
    }
    catch (error) {
        res.status(500).json({
            message: {
                en: "Internal server error",
                es: "Error interno del servidor",
            },
            error: { error },
        });
    }
});
exports.getAdmin = getAdmin;
const registerAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const secretCode = config_1.SECRET_REGISTRATION_CODE;
    if (data.code !== secretCode) {
        res.status(403).json({
            message: { en: "Invalid secret code", es: "Código secreto no válido" },
        });
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        res.status(400).json({
            message: {
                en: "Invalid email format",
                es: "Formato de email invalido",
            },
        });
        return;
    }
    try {
        const existingAdmin = yield Admin_1.default.findOne({ email: data.email });
        if (existingAdmin) {
            res.status(409).json({
                message: { en: "Email already exists", es: "El email ya existe" },
            });
            return;
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        const passwordEncrypt = yield bcryptjs_1.default.hash(data.password, salt);
        const newAdmin = new Admin_1.default({
            email: data.email,
            password: passwordEncrypt,
        });
        yield newAdmin.save();
        res.send({
            message: {
                en: "Success registering the new admin",
                es: "Administrador registrado con exito",
            },
        });
    }
    catch (error) {
        res.status(500).json({
            message: {
                en: "Internal server error",
                es: "Error interno del servidor",
            },
            error: { error },
        });
    }
});
exports.registerAdmin = registerAdmin;
