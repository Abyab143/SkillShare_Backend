import mongoose from "mongoose";

const hackSchema = new mongoose.Schema(
  {
    hackName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hackDate:{
     type: String,
     required: true,
    },
    hackLink: {
      type: String,
      required: true,
    },
    hackImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Hack', hackSchema);
