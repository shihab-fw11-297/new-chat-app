const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected`);
  } catch (error) {
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;