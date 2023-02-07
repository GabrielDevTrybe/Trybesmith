import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct, Product } from '../interfaces/product.interface';

const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, ...product };
  return newProduct;
};

export default {
  create,
};