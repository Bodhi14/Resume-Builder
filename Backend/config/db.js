const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;

    const clientOptions = {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      },
    };

    const conn = await mongoose.connect(uri, clientOptions);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;