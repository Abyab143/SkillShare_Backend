import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDate:{
     type: String,
     required: true,
    },
    eventLink: {
      type: String,
      required: true,
    },
    eventImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Event', eventSchema);
