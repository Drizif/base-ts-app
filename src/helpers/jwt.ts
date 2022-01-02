import jwt from "jsonwebtoken";
import env from "../config/env";

const { secretKey, expiration } = env.jwt;

export const verifyJWT = async ({ token }: { token: string }) => {
  return await jwt.verify(token, secretKey);
};

export const generateJWT = async (email: string) => {
  return await jwt.sign({ email }, secretKey, { expiresIn: expiration });
};
