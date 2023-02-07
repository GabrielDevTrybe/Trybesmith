import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IUser, User } from '../interfaces/product.interface';

const create = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;

  const query = 'INSERT INTO Trybesmith.users '
  + '(username, vocation, level, password) VALUES (?, ?, ?, ?)';

  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newUser: User = { id, ...user };

  return newUser;
};

export default {
  create,
};