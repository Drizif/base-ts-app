import { Schema, model } from "mongoose";
import { UserInterface } from "../interfaces/user.interfaces";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.method("toJSON", function (): Object {
  const { __v, _id, ...object } = this.toObject();

  object.id = _id;
  delete object._id;
  return object;
});

export default model<UserInterface>("User", UserSchema);
