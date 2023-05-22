import { NextFunction, Request, Response } from "express";
import { loginSchema } from "../joi/loginSchema";
import BadRequest from "../errors/BadRequest";

export default class LoginValidate {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { error } = loginSchema.validate(req.body);

    if (error) {
      throw new BadRequest('Invalid Fields');
    }

    next();
  }
}