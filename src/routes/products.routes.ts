import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();
router.post('/', ProductsController.create);

export default router;