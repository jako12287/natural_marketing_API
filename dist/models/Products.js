"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    descriptionShort: { type: String, required: true },
    descriptionLarge: { type: String, required: true },
    price: { type: String, required: true },
    photos: { type: [String], required: true },
    status: { type: mongoose_1.Schema.Types.String, required: true, enum: Object.values(Status) },
});
const ProductModel = (0, mongoose_1.model)("Product", productSchema);
exports.default = ProductModel;
