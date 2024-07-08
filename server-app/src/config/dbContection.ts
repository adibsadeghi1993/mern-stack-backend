import mongoose from "mongoose";

const connectToMongoDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/url-shortner")
    .then(() => console.log("data base connected"))
    .catch(() => {
      console.log("database not connected");
    });
};

module.exports = connectToMongoDB;
