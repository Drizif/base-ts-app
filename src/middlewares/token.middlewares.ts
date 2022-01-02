import { Request, Response, NextFunction } from "express";
import { Validator } from "../validators/token.validators";
import { verifyJWT } from "../helpers/jwt";

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    req.headers.token = await Validator().validateAsync({
      ...req.headers,
    });

    // @ts-ignore
    await verifyJWT(req.headers.token);
    next();
  } catch (error: any) {
    res.status(400).json({ status: false, message: 'Invalid token', data: null });
  }
};
