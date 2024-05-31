import {Router} from 'express';
import {createProduct, getProduct, getProducts} from "./handlers/products";

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', createProduct);
router.put('/products/:id', () => {});
router.delete('/products/:id', () => {});


router.get('/updates', () => {});
router.get('/updates/:id', () => {});
router.post('/updates', () => {});
router.put('/updates/:id', () => {});
router.delete('/updates/:id', () => {});

export default router