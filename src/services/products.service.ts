// import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import { IProduct } from '../interfaces/product.interface';

const create = async (product: IProduct) => {
  const data = await ProductsModel.create(product);
  return { status: 201, data };
};

export default {
  create,
};