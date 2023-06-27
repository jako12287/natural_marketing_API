"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get("/products", products_1.getProducts);
router.get("/products/:id", products_1.getProductById);
router.post("/products", middlewares_1.authenticate, products_1.postProducts);
router.put("/products", middlewares_1.authenticate, products_1.upDateProducts);
router.delete("/products", middlewares_1.authenticate, products_1.deleteProduct);
exports.default = router;
