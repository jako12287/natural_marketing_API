"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
const offerSchema = new mongoose_1.Schema({
    photos: { type: [String], required: true },
    status: { type: mongoose_1.Schema.Types.String, required: true, enum: Object.values(Status) },
});
const OffersModel = (0, mongoose_1.model)("Offer", offerSchema);
exports.default = OffersModel;
