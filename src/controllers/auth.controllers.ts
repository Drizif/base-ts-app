import { Request, Response } from "express";
import authDB from "../database/auth.db";

class AuthController {
  signIn = async (req: Request, res: Response): Promise<Object> => {
    try {
      const { email, password } = req.body.user;

      const encryptedPassword = await authDB.getEncryptedPass(email);

      const token = await authDB.signIn(email, password, encryptedPassword);

      return res.json({
        status: true,
        message: "Successful sign in",
        data: token,
      });
    } catch (error: any) {
      return res.status(401).json({
        status: false,
        message: "Verify credentials",
        data: null,
      });
    }
  };

  signUp = async (req: Request, res: Response): Promise<Object> => {
    try {
      await authDB.signUp(req.body.user);
      delete req.body.user.password;

      return res.status(200).json({
        status: true,
        message: "Successful sign up",
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
}

export default new AuthController();
