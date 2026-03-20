import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // No need to define MONGO_URI again — just read it directly
    // (dotenv already loaded it in index.js)
    
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB connected successfully → ${mongoose.connection.host}`);
    
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;