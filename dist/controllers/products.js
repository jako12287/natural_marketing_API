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
exports.deleteProduct = exports.upDateProducts = exports.postProducts = exports.getProductById = exports.getProducts = void 0;
const Products_1 = __importDefault(require("../models/Products"));
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getData = yield Products_1.default.find({});
        res.send({ message: "getAllProducts", data: getData });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const getData = yield Products_1.default.findById(id);
        if (!getData) {
            res.send({ message: "Product not found", data: {} });
            return;
        }
        res.send({ message: `getProductById`, data: getData });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProductById = getProductById;
const postProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newProduct = new Products_1.default({
        name: data.name,
        descriptionShort: data.descriptionShort,
        descriptionLarge: data.descriptionLarge,
        price: data.price,
        photos: data.photos,
        status: data.status,
    });
    console.log("data de product post", req.body);
    try {
        yield newProduct.save();
        res.send({ message: "200 ok", data: newProduct });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postProducts = postProducts;
const upDateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    if (!data._id) {
        res.status(400).json({ message: "Missing required field: _id" });
        return;
    }
    try {
        const product = yield Products_1.default.findById(data._id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        else {
            data.name ? (product.name = data.name) : null;
            data.descriptionShort
                ? (product.descriptionShort = data.descriptionShort)
                : null;
            data.descriptionLarge
                ? (product.descriptionLarge = data.descriptionLarge)
                : null;
            data.price ? (product.price = data.price) : null;
            data.photos ? (product.photos = data.photos) : null;
            data.status ? (product.status = data.status) : null;
            yield product.save();
        }
        res.send({ message: "Product update successfully", data: product });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating the product" });
        return;
    }
});
exports.upDateProducts = upDateProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    if (!data._id) {
        res.status(400).json({ message: "Missing required field: _id" });
        return;
    }
    try {
        const product = yield Products_1.default.findById(data._id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        yield product.deleteOne();
        return res.send({ message: "Product deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting the product" });
        return;
    }
});
exports.deleteProduct = deleteProduct;
