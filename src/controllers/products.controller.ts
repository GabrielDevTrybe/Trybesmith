import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import { IProduct } from '../interfaces/product.interface';

const create = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const { status, data } = await ProductService.create(product);
  res.status(status).json(data);
};

export default {
  create,
};