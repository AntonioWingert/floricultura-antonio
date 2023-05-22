import * as jwt from 'jsonwebtoken';

export interface TokenPayload extends jwt.JwtPayload {
  email: string;
  admin: boolean;
}