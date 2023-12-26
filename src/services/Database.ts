import mongoose from "mongoose";
import { mongoUrl } from "../config";

export default async () => {
  try {
    await mongoose.connect(mongoUrl);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
