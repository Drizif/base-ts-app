import jwt from "jsonwebtoken";
import env from "../config/env";

const { secretKey, expiration } = env.jwt;

export const verifyJWT = async ({ token }: { token: string; }): Promise<string | jwt.JwtPayload> => {
  return await jwt.verify(token, secretKey);
};

export const generateJWT = async (email: string): Promise<string> => {
  return await jwt.sign({ email }, secretKey, { expiresIn: expiration });
};
