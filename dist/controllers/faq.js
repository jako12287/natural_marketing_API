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
exports.deleteFaq = exports.updateFaqs = exports.postFaqs = exports.getFaqById = exports.getAllFaq = void 0;
const Faq_1 = __importDefault(require("../models/Faq"));
const getAllFaq = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getData = yield Faq_1.default.find();
        res.send({ message: "getFaq", data: getData });
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
exports.getAllFaq = getAllFaq;
const getFaqById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const getData = yield Faq_1.default.findById(id);
        if (!getData) {
            res.send({ message: "FAQ not found", data: {} });
            return;
        }
        res.send({ message: `getFaqById`, data: getData });
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
exports.getFaqById = getFaqById;
const postFaqs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newFaq = new Faq_1.default({
        ask: data.ask,
        answer: data.answer,
        status: data.status,
    });
    try {
        yield newFaq.save();
        res.send({ message: "Successfully created", data: newFaq });
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
exports.postFaqs = postFaqs;
const updateFaqs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    if (!data._id) {
        res.status(400).json({ message: "Missing required field: _id" });
        return;
    }
    try {
        const faq = yield Faq_1.default.findById(data._id);
        if (!faq) {
            res.status(404).json({ message: "Faq not found" });
            return;
        }
        else {
            data.ask ? (faq.ask = data.ask) : null;
            data.answer ? (faq.answer = data.answer) : null;
            data.status ? (faq.status = data.status) : null;
            yield faq.save();
        }
        res.send({ message: "Faq update successfully", data: faq });
    }
    catch (error) {
        res.status(500).json({
            message: { en: "Error updating", es: "Error al actualizar" },
            error: { error },
        });
        return;
    }
});
exports.updateFaqs = updateFaqs;
const deleteFaq = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const faqId = req.body._id;
    if (!faqId) {
        res.status(400).json({
            message: {
                en: "Missing required field: _id",
                es: "Falta el campo obligatorio: _id",
            },
        });
        return;
    }
    try {
        const deletedFaq = yield Faq_1.default.findByIdAndDelete(faqId);
        if (deletedFaq) {
            res.send({
                message: { en: "Deleted successfully", es: "Eliminada con éxito" },
                data: deletedFaq,
            });
        }
        else {
            res
                .status(404)
                .send({ message: { en: "Faq not found", es: "Faq no encontrada" } });
        }
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
exports.deleteFaq = deleteFaq;
