import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth/", authRouter);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  try {
    await connectDB();
  } catch (err) {
    console.error("Failed to start because DB connection failed");
    process.exit(1);
  }
});
