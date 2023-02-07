import UserModel from '../models/user.model';
import { IUser } from '../interfaces/product.interface';
import jwtToken from '../utils/JWT';

const create = async (user: IUser) => {
  const result = await UserModel.create(user);
  const JWTtoken = jwtToken.generateToken(result);
  return { status: 201, JWTtoken };
};

export default {
  create,
};