const mongoose = require('mongoose');

 const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_ATLAS + process.env.MONGO_DB + "?retryWrites=true&w=majority");
      console.log("123 - Connected to MongoDB!" + process.env.MONGO_ATLAS + process.env.MONGO_DB);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };
  

  module.exports = connectDB;