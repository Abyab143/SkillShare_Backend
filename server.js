import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import userRoutes from "./Router/User.js";
import courseRoutes from "./Router/Course.js";
import eventRoutes from "./Router/Event.js";
import hack from "./Router/Hack.js";
import admin from "./Router/Admin.js";


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
config({
  path: "config.env",
});
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "Skillshare",
    })
    .then(() => {
      console.log("Moongodb is connected");
    });
};

//middlewares
app.use("/user/auth",userRoutes);
app.use("/admin/auth",admin);
app.use("/api",courseRoutes);
app.use("/api",eventRoutes);
app.use("/api",hack);


app.listen(process.env.PORT, () => {
  connect();
  console.log(`App listening on port ${process.env.PORT}`);
});
