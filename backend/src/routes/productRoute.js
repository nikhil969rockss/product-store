import express from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/productController.js";
const router = express.Router();

//get all
router.get("/products", getAllProducts)
//create product
router.post("/product", createProduct)
//Update
router.put("/product/:id", updateProduct)
//delete
router.delete("/product/:id", deleteProduct)

export default router;