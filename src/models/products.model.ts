import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct, Product } from '../interfaces/product.interface';

const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [data] = await connection.execute(query);
  return data as Product[];
};

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
  getAll,
  create,
};