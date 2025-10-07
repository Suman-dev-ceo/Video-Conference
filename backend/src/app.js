import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8080);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDB = await mongoose.connect(
    "mongodb+srv://sumansrinivas75699_db_user:PqLYpYE88CSXOboQ@videoconference.hqlsuzg.mongodb.net/?retryWrites=true&w=majority&appName=videoConference"
  );
  console.log(`MONGO Connected DB Host: ${connectionDB.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("app is listening to the port: 8080");
  });
};
start();
