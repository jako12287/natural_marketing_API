"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = require("../controllers/admin");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get("/_admin", middlewares_1.authenticate, admin_1.getAdmin);
router.post("/_admin", admin_1.registerAdmin);
exports.default = router;
