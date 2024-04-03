import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    courseLink: {
      type: String,
      required: true,
    },
    courseImg: {
      type: String,
      required: true,
    },
    notes:{
      type:String
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
