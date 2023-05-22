import { Request, Response } from "express";
import UserService from "../services/userService";

export default class UserController {
  constructor(
    private readonly userService: UserService = new UserService(),
  ) {}

  public static async login(req: Request, res: Response): Promise<Response<string | undefined>>
  {
    const { email, password } = req.body;
    const token = await UserService.login(email, password);
    return res.json(token);
  }

  public static async register(req: Request, res: Response): Promise<Response<string | undefined>>
  {
    const { email, name, password } = req.body;
    const token = await UserService.register(email, name, password);
    return res.json(token);
  }
}