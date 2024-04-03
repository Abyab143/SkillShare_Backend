import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../Model/User.js";
import Course from "../Model/Course.js";

export const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found");
    } else {
      const isCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!isCorrect) {
        return res.status(404).send("password is wrong");
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT);
        const { password, ...others } = user._doc;

        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(others);
      }
    }
  } catch (err) {
    return res.status(400).send("Login Failed");
  }
};

export const googleAuth = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};

//user enrolled course
export const enrollCourse = async (req, res) => {
  try {
    const user = await User.findById(req.params.userid);

    if (!user) {
      return res.status(404).send("User not found");
    }

    const enrolledCourses = await Promise.all(
      user.enrollCourse.map(async (courseId) => {
        return await Course.findById(courseId);
      })
    );

    if (enrolledCourses.length === 0) {
      return res.status(404).send("No courses enrolled");
    }

    return res.status(200).json({
      message: "Courses found successfully",
      courses: enrolledCourses,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while finding courses",
      error: err.message,
    });
  }
};
