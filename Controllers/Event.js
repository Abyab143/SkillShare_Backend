import mongoose from "mongoose";
import Event from "../Model/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    return res.status(200).send("Event created successfully");
  } catch (err) {
    return res.status(400).send("Invalid Event details");
  }
};

export const getAllevent = async (req, res) => {
  try {
    const event = await Event.find();
    if (!event) {
      return res.status(404).send("There is no Event");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      event,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  Event details");
  }
};

export const getHomeEvent = async (req, res) => {
  try {
    const event = await Event.find().limit(3);
    if (!event) {
      return res.status(404).send("There is no Event");
    }
    return res.status(200).json({
      sucess: true,
      message: "Your event ",
      event,
    });
  } catch (err) {
    return res.status(400).send("Something wrong in  Event details");
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).send("Wrong event id");
    }
    await event.deleteOne();
    res.status(200).send("Event deleted successfully");
  } catch (err) {
    return res.send("event delete is not performed");
  }
};

export const updateEvent = async (req, res) => {
  const { eventName, description, eventDate, eventLink, eventImg } = req.body;
  try {
    const id = req.params.id;
    console.log(id);
    const event = await Event.findById(id);
    if (!event) {
      return res.send("Something went to wrong");
    }
    event.eventName = eventName;
    event.description = description;
    event.eventDate = eventDate;
    event.eventLink = eventLink;
    event.eventImg = eventImg;
    event.save();
    res.send("Event is Updated");
  } catch (err) {
    res.send("event is not updated");
  }
};
