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
exports.Login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Admin_1 = __importDefault(require("../models/Admin"));
const jwt_1 = require("./jwt");
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        res.status(400).json({ message: "Invalid email format" });
        return;
    }
    try {
        const adminindb = yield Admin_1.default.findOne({ email: data.email });
        if (!adminindb || !(adminindb === null || adminindb === void 0 ? void 0 : adminindb.password)) {
            res.send({ message: "Invalid email or password" });
            return;
        }
        else {
            const passwordMatch = yield bcryptjs_1.default.compare(data.password, adminindb.password);
            if (!passwordMatch) {
                res.send({ message: "Invalid email or password" });
                return;
            }
            const token = (0, jwt_1.generateToken)(adminindb === null || adminindb === void 0 ? void 0 : adminindb._id);
            res.send({
                message: "login success",
                token,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.Login = Login;
