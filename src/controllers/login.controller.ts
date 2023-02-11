import { Request, Response } from 'express';
import LoginService from '../services/login.service';
// import { IUser } from '../interfaces/product.interface';

const create = async (req: Request, res: Response): Promise<Response> => {
  const users = req.body;
  const token = await LoginService.create(users);
  if (token.type) return res.status(401).json({ message: token.message });
  return res.status(200).json({ token: token.message });
};

export default {
  create,
};