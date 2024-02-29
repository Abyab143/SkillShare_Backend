import mongoose from "mongoose";
import Hack from "../Model/Hackathon.js"

export const createHack = async (req, res) => {
  try{
    const hack = new Hack(req.body);
    await hack.save();
    return res.status(200).send("Hackathon created successfully");
  }
  catch(err){
    return res.status(400).send("Invalid Hackathon details Occurs");
  }
};

export const getAllHack = async (req, res) => {
  try {
    const hack = await Hack.find();
    if (!hack) {
      return res.status(404).send("There is no Hackathon found");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      hack,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  Hackathons details");
  }
};

export const getHack = async (req, res) => {
  try {
    const id = req.params.id;
    const hack = await Hack.findById(id);
    if (!hack) {
      return res.status(404).send("There is no Hackathon found");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      hack,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  Hackathons details");
  }
};

export const getHomeHack = async (req, res) => {
  try {
    const hack = await Hack.find().limit(3);
    if (!hack) {
      return res.status(404).send("There is no Hackathon found");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      hack,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  Hackathons details");
  }
};

export const deleteHack = async (req, res) => {
  try {
    const id = req.params.id;
    const hack = await Hack.findById(id);
    if (!hack) {
      return res.status(404).send("Wrong Hackathon id");
    }
    await hack.deleteOne();
    res.status(200).send("Hackathon deleted successfully");
  } catch (err) {
    return res.send("Hackathon delete is not performed");
  }
};

export const updateHack = async (req, res) => {
  const { hackName, description, hackDate, hackLink, hackImg } = req.body;
  try {
    const id = req.params.id;
    console.log(id);
    const hack = await Hack.findById(id);
    if (!hack) {
      return res.send("Something went to wrong");
    }
    hack.hackName = hackName;
    hack.description = description;
    hack.hackDate = hackDate;
    hack.hackLink = hackLink;
    hack.hackImg = hackImg;
    hack.save();
    res.send("Hackathon is Updated");
  } catch (err) {
    res.send("Hackathon is not updated");
  }
};
