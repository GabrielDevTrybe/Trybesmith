// import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { ILogin } from '../interfaces/product.interface';

const create = async (name: string, password: string) => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const values = [name, password];

  const [result] = await connection.execute(query, values);

  return result as ILogin[];
};

export default {
  create,
};