import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is Required",
    },
    email: {
      type: String,
      trim: true,
      required: "Email is Required",
      unique: true,
    },
    password: {
      type: String,
      required: "Password is Required",
      min: 6,
      max: 64,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
