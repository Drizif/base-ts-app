import bcrypt from "bcryptjs";
import User from "../models/user.model";
import { generateJWT } from "../helpers/jwt";
import { UserInterface } from "../interfaces/user.interfaces";

class UserDB {
  signIn = async (email: string, password: string, encryptedPassword: string): Promise<string> => {
    try {
      const isCorrect = bcrypt.compareSync(password, encryptedPassword);

      if(!isCorrect) throw "Verify credentials";

      return await generateJWT(email);
    } catch (error) {
      throw error;
    }
  };

  signUp = async (config: UserInterface) => {
    try {
      const user = new User(config);
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(config.password, salt);

      await user.save();
    } catch (error: any) {
      if (error.message.includes("E11000")) {
        error.message = "Some data already exists";
      }
      throw error;
    }
  };

  getEncryptedPass = async (email: string): Promise<string> => {
    try {
      const user = await User.findOne({ email }, "password");

      if(!user) throw "Verify credentials";

      return user.password;
    } catch (error: any) {
      throw error;
    }
  };
}

export default new UserDB();
