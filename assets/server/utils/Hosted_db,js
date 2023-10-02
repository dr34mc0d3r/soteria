const mongoose = require('mongoose');

 const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://" + process.env.MONGO_HOST + ":" + process.env.MONGO_PORT + "/" + process.env.MONGO_DB);
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };
  

  module.exports = connectDB;