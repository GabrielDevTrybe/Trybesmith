import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/product.interface';

const TOKEN_SECRET = process.env.JWT_SECRET || 'paodequeijo';

const generateToken = (user: IUser): string => {
  try {
    return jwt.sign(
      user, 
      TOKEN_SECRET,
      {
        expiresIn: '30d',
        algorithm: 'HS256',
      },
    );
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

// const generateTokenLogin = (login: ILogin): string => {
//   try {
//     return jwt.sign(
//       login, 
//       TOKEN_SECRET,
//       {
//         expiresIn: '30d',
//         algorithm: 'HS256',
//       },
//     );
//   } catch (error) {
//     throw new Error('Falha ao gerar token');
//   }
// };

export default {
  generateToken,
  // generateTokenLogin,
};