import * as jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/TokenPayload';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const configJWT: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const generateToken = (email: string, admin: boolean): string =>
  jwt.sign({ email, admin }, JWT_SECRET, configJWT);

const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET) as TokenPayload;

export { generateToken, verifyToken };
