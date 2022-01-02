import bcrypt from "bcryptjs";
import User from "../models/user.model";
import { UserInterface, GetUser } from "../interfaces/user.interfaces";

class UserDB {
  getUser = async (email: string): Promise<GetUser> => {
    try {
      // @ts-ignore
      return await User.findOne({ email }, "name lastName email ");
    } catch (error) {
      throw error;
    }
  };

  getUsers = async (): Promise<Array<GetUser>> => {
    try {
      return await User.find({}, "name lastName email");
    } catch (error) {
      throw error;
    }
  };

  deleteUser = async (email: string): Promise<void> => {
    try {
      await User.findOneAndDelete({ email });
    } catch (error: any) {
      throw error;
    }
  };

  updateUser = async (email: string, user: UserInterface): Promise<void> => {
    try {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
      await User.findOneAndUpdate({ email }, user, { new: true });
    } catch (error: any) {
      if (error.message.includes("E11000")) {
        error.message = "Some data already exists";
      }
      throw error;
    }
  };
}

export default new UserDB();
