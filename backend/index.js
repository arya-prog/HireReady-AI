import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
console.log("PORT from env     :", process.env.PORT);
console.log("MONGO_URI from env :", process.env.MONGO_URI);

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! from backend of HireReady AI");
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  try {
    await connectDB();
  } catch (err) {
    console.error("Failed to start because DB connection failed");
    process.exit(1);
  }
});
