import { Router } from "express";
import { getProducts, createNewProduct, getProductById, deleteProduct, updateProductById } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', getProducts);
// router.get('/products', (req, res) => res.send("PRODUCTS")); ESTO ES PATRA PROBAR
router.get('/products/:id', getProductById);

// router.get('/products/count', getTotalProducts);

router.post('/products', createNewProduct);

router.delete('/products/:id', deleteProduct);

router.put('/products/:id', updateProductById);

export default router