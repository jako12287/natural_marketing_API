"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dataBase_1 = __importDefault(require("./dataBase"));
const sendEmail_routes_1 = __importDefault(require("./routes/sendEmail.routes"));
const Newslatter_routes_1 = __importDefault(require("./routes/Newslatter.routes"));
const StatusSever_routes_1 = __importDefault(require("./routes/StatusSever.routes"));
const SaveEmail_routes_1 = __importDefault(require("./routes/SaveEmail.routes"));
const IpUser_routes_1 = __importDefault(require("./routes/IpUser.routes"));
const emailCatchug_route_1 = __importDefault(require("./routes/emailCatchug.route"));
const config_1 = require("./config");
app_1.default.use((0, cors_1.default)());
app_1.default.use(express_1.default.json({ limit: "50mb" }));
app_1.default.use(StatusSever_routes_1.default);
app_1.default.use(sendEmail_routes_1.default);
app_1.default.use(Newslatter_routes_1.default);
app_1.default.use(SaveEmail_routes_1.default);
app_1.default.use(IpUser_routes_1.default);
app_1.default.use(emailCatchug_route_1.default);
app_1.default.get("*", (_req, res) => {
    res.send({ message: "No products available", data: {} });
});
(0, dataBase_1.default)().then(() => {
    app_1.default.listen(config_1.PORT, () => {
        console.log(`Servidor Express iniciado en el puerto ${config_1.PORT}`);
    });
});
