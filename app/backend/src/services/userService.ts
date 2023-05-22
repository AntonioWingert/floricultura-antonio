import Unauthorized from "../errors/Unauthorized";
import User from "../database/models/User";
import * as bcrypt from "bcryptjs";
import { generateToken } from "../utils/JWT";

export default class UserService {
  public static async login(email: string, password: string):
    Promise<string | undefined> {

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
      throw new Unauthorized("Invalid email or password");
    }

    return generateToken(user.dataValues.email, user.dataValues.isAdmin)
  }

  public static async register(email: string, name:string, password: string):
    Promise<string | undefined> {

      const user = await User.findOne({ where: { email } });

      if (user) {
        throw new Unauthorized("Email already exists");
      }

      const newUser = await User.create({
        email,
        name,
        password: bcrypt.hashSync(password, 8),
      });

      return generateToken(newUser.dataValues.email, newUser.dataValues.isAdmin)
  }
}