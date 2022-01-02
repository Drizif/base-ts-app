import mongoose from "mongoose";
import { DateTime } from "luxon";
import env from "../config/env";

const { cluster, name, user, pass } = env.database;

export const dbConnection = async (tz: string) => {
  try {
    await mongoose.connect(`mongodb+srv://${user}:${pass}@${cluster}/${name}`);
    console.info("DB Connected", DateTime.now().setZone(tz).toISO());
  } catch (error) {
    console.error(error);
  }
};
