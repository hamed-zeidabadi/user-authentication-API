//Import Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
import connectDB from "./db";
import userRouter from "./Routes/User_Router";
const app = express();

// Add Middleware1
app.use(cors());
app.use(helmet());
app.use(express.json());
dotenv.config();

// Database connection

const connectDB = require("./db").connectDB;
connectDB();

// Add Router
app.use("/api", userRouter);

// Running Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Running On ${PORT}`));
