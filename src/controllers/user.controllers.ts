import { Request, Response } from "express";
import userDB from "../database/user.db";

class UserController {
  getUser = async (req: Request, res: Response): Promise<Object> => {
    try {
      // @ts-ignore
      const { email } = req.query.user;

      const data = email ? await userDB.getUser(email) : await userDB.getUsers();

      if (!data) {
        return res.status(404).json({
          status: false,
          message: "User does not exists",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Users obtained successfully",
        data,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  };

  updateUser = async (req: Request, res: Response): Promise<Object> => {
    try {
      const { name, lastName, email, password } = req.body.user;
      const user = await userDB.getUser(email);
      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User does not exists",
          data: null,
        });
      }
      // @ts-ignore
      await userDB.updateUser(email, { name, lastName, email, password });

      delete req.body.user.password;

      return res.status(200).json({
        status: true,
        message: "User updated successfully",
        data: req.body.user,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  };

  deleteUser = async (req: Request, res: Response): Promise<Object> => {
    try {
      // @ts-ignore
      const { email } = req.query.user;
      const user = await userDB.getUser(email);
      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User does not exists",
          data: null,
        });
      }
      await userDB.deleteUser(email);

      return res.status(200).json({
        status: true,
        message: "User deleted successfully",
        data: email,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  };
}

export default new UserController();
