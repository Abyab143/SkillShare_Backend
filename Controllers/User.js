import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../Model/User.js";

export const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).json({newUser});
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
};

export const login = async (req, res) => {
  try {
   const user = await User.findOne({email: req.body.email});
   if (!user) {
    return res.status(404).send("User not found");
   }
   else{
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if(!isCorrect){
      return res.status(404).send("password is wrong");
    }
    else{
      const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;

      if(response){
    res.cookie("access_token", token);
      
      return res.status(200)
      .json({
        token,
        others
      }
        );
      }
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

