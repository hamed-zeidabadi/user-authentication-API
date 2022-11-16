const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    const DB = process.env.DB;
    await mongoose
      .connect(process.env.DB)
      .then(() => console.log("Successfully connected to the database"));
  } catch (error) {
    console.log(error);
  }
};
