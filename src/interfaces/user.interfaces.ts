import { Document } from "mongoose";

declare namespace User {
  interface UserInterface extends Document {
    name: string;
    lastName: string;
    email: string;
    password: string;
  }

  interface GetUser extends Document {
    _id: string;
    name: string;
    lastName: string;
    email: string;
  }
}

export = User;
