import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import { IProduct } from '../interfaces/product.interface';

const getAll = async (req: Request, res: Response) => {
  const { status, data } = await ProductService.getAll();
  return res.status(status).json(data);
};

const create = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const { status, data } = await ProductService.create(product);
  res.status(status).json(data);
};

export default {
  getAll,
  create,
};