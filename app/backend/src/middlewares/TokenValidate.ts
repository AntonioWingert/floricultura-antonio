import { NextFunction, Request, Response } from "express";
import Unauthorized from "../errors/Unauthorized";
import { verifyToken } from "../utils/JWT";

export default class TokenValidate {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new Unauthorized("Unauthorized");
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      throw new Unauthorized("Unauthorized");
    }

    next();
  }

  public static isAdmin(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new Unauthorized("Unauthorized");
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      throw new Unauthorized("Unauthorized");
    }
    
    if (!decoded.admin) {
      throw new Unauthorized("Unauthorized");
    }

    next();
  }
}