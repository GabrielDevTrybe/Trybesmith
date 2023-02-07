import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { IUser } from '../interfaces/product.interface';

const create = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const { status, JWTtoken } = await UserService.create(user);
  res.status(status).json({ token: JWTtoken });
};

export default {
  create,
};