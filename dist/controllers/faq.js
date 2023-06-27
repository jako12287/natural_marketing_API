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
exports.deleteFaq = exports.updateFaqs = exports.postFaqs = exports.getAllFaq = void 0;
const Faq_1 = __importDefault(require("../models/Faq"));
const getAllFaq = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getData = yield Faq_1.default.find();
        res.send({ message: "getFaq", size: getData.length, data: getData });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllFaq = getAllFaq;
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
        console.log(error);
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
        console.log(error);
        res.status(500).json({ message: "Error updating the Faq" });
        return;
    }
});
exports.updateFaqs = updateFaqs;
const deleteFaq = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const faqId = req.body._id;
    if (!faqId) {
        res.status(400).json({ message: "Missing required field: _id" });
        return;
    }
    try {
        const deletedFaq = yield Faq_1.default.findByIdAndDelete(faqId);
        if (deletedFaq) {
            res.send({ message: "Faq deleted successfully", data: deletedFaq });
        }
        else {
            res.status(404).send({ message: "Faq not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting the Faq" });
    }
});
exports.deleteFaq = deleteFaq;
