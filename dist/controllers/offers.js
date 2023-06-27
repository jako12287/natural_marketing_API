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
exports.deleteOffer = exports.postOffers = exports.getAllOffers = void 0;
const Offers_1 = __importDefault(require("../models/Offers"));
const getAllOffers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getData = yield Offers_1.default.find();
        res.send({ message: "getOffers", size: getData.length, data: getData });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllOffers = getAllOffers;
const postOffers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newOffer = new Offers_1.default({
        photos: data.photos,
        status: data.status,
    });
    try {
        yield newOffer.save();
        res.send({ message: "Successfully created", data: newOffer });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postOffers = postOffers;
const deleteOffer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    if (!data._id) {
        res.status(400).json({ message: "Missing required field: _id" });
        return;
    }
    try {
        const offer = yield Offers_1.default.findById(data._id);
        if (!offer) {
            res.status(404).json({ message: "Offer not found" });
            return;
        }
        yield offer.deleteOne();
        return res.send({ message: "Offer deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting the offer" });
        return;
    }
});
exports.deleteOffer = deleteOffer;
