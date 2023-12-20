const mongoose = require("mongoose");
const color =require("color");

const db = () => {
  try {
    mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED".bgWhite);
  } catch (error) {
    console.log(error);
  }
};
module.exports = db;
