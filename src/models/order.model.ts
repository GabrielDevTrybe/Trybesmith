import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

const getAll = async (): Promise<ResultSetHeader> => {
  const query = 'SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds '
  + 'FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p ON o.id= p.order_id '
  + 'GROUP BY o.id';

  const [result] = await connection.execute<ResultSetHeader>(query);

  return result;
};

export default {
  getAll,
};