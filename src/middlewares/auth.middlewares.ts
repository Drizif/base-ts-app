import { Request, Response, NextFunction } from "express";
import Validator from "../validators/auth.validators";

class UserMiddleware {
  signIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body.user = await Validator.signIn().validateAsync({
        ...req.body,
      });

      next();
    } catch (error: any) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  };

  signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body.user = await Validator.signUp().validateAsync({
        ...req.body,
      });

      next();
    } catch (error: any) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  };
}

export default new UserMiddleware();
