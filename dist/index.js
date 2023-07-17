"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Products_routes_1 = __importDefault(require("./routes/Products.routes"));
const Offers_routes_1 = __importDefault(require("./routes/Offers.routes"));
const dataBase_1 = __importDefault(require("./dataBase"));
const Faq_routes_1 = __importDefault(require("./routes/Faq.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const Auth_routes_1 = __importDefault(require("./routes/Auth.routes"));
const config_1 = require("./config");
app_1.default.use((0, cors_1.default)());
app_1.default.use(express_1.default.json());
app_1.default.use(Auth_routes_1.default);
app_1.default.use(Products_routes_1.default);
app_1.default.use(Offers_routes_1.default);
app_1.default.use(Faq_routes_1.default);
app_1.default.use(admin_routes_1.default);
(0, dataBase_1.default)().then(() => {
    app_1.default.listen(config_1.PORT, () => {
        console.log(`Servidor Express iniciado en el puerto ${config_1.PORT}`);
    });
});
