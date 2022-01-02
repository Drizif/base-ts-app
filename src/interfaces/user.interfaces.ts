import { Document } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface GetUser extends Document {
  _id: string;
  name: string;
  lastName: string;
  email: string;
}
