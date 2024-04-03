import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      default: "0000",
      required: true,
    },
    google:{
      type: Boolean,
      default: false,
    },
    isAdmin:{
      type: Boolean,
      default: false,
    },
    enrollCourse:{
      type:[]
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User",UserSchema);
