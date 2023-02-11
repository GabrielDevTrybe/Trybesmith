import LoginModel from '../models/login.model';
import { ILogin } from '../interfaces/product.interface';
import JWTtoken from '../utils/JWT';

const create = async (user: { username: string, password: string }) => {
  const [result] = await LoginModel.create(user.username, user.password);

  if (!result) return { type: 'error', message: 'Username or password invalid' };

  const userResult: ILogin = {
    id: result.id,
    username: result.username,
    vocation: result.vocation,
    level: result.level,
    password: result.password,
  };

  const token = JWTtoken.generateToken(userResult);
  return { type: null, message: token };
};

export default {
  create,
};