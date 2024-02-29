import mongoose from "mongoose";
import Course from "../Model/Course.js"

export const createCourse = async (req, res) => {
  try{
    const course = new Course(req.body);
    await course.save();
    return res.status(200).send("Course created successfully");
  }
  catch(err){
    return res.status(400).send("Invalid Course Occurs");
  }
};

export const getAllcourse = async (req, res) => {
  try {
    const course = await Course.find();
    if (!course) {
      return res.status(404).send("There is no couse");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      course,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  course details");
  }
};


export const getCourse = async (req, res) => {
  try {
    const id = await req.params.id;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).send("There is no couse");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      course,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  course details");
  }
};


export const getHomeCourse = async (req, res) => {
  try {
    const course = await Course.find().limit(3);
    if (!course) {
      return res.status(404).send("There is no couse");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      course,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  course details");
  }
};


export const deleteCourse = async (req, res) => {
  try {
    const id = await req.params.id;
    console.log(id);
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).send("Wrong course id");
    }
    await course.deleteOne();
    res.status(200).send("Course deleted successfully");
  } catch (err) {
    return res.send("course delete is not performed");
  }
};

export const updateCourse = async (req, res) => {
  const { courseName,courseType, description,courseLink, courseImg } = req.body;
  try {
    const id = req.params.id;
    console.log(id);
    const course = await Course.findById(id);
    if (!course) {
      return res.send("Something went to wrong");
    }
    course.courseName = courseName;
    course.courseType = courseType;
    course.description = description;
    course.courseLink = courseLink;
    course.courseImg = courseImg;
    course.save();
    res.send("course is Updated");
  } catch (err) {
    res.send("course is not updated");
  }
};

