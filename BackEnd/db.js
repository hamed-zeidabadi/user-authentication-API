const mongoose = require("mongoose");
//Hard Code :)
const DB =
  "mongodb://root:rpYPQkPmiFvRQXItxQTCgARJ@michael.iran.liara.ir:33510/my-app?authSource=admin&replicaSet=rs0&directConnection=true";

exports.connectDB = async () => {
  try {
    await mongoose
      .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Successfully connected to the database"));
  } catch (error) {
    console.log(error);
  }
};
