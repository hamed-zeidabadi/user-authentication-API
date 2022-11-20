//Import Libraries
const express = require("express");
const app = express();
const path = require("path");

// Add Middleware
const cors = require("cors");
const helmet = require("helmet");
app.use(cors());
app.use(helmet());
app.use(express.json());
require("dotenv").config();

// Database connection
const connectDB = require("./db").connectDB;
connectDB();

// Add Router
const User_Route = require("./Routes/User_Router");
app.use("/api", User_Route);
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join("./public")));

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  res.redirect("/");
});

// Running Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Running On ${PORT}`));
