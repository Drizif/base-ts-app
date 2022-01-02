import { Request, Response, NextFunction } from "express";
import Validator from "../validators/user.validators";

class UserMiddleware {
  getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.query.user = await Validator.getUser().validateAsync({
        ...req.query,
      });

      next();
    } catch (error: any) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body.user = await Validator.updateUser().validateAsync({
        ...req.body,
      });

      next();
    } catch (error: any) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.query.user = await Validator.deleteUser().validateAsync({
        ...req.query,
      });

      next();
    } catch (error: any) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  };
}

export default new UserMiddleware();
