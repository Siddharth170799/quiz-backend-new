import express from "express";
import mongoose from "mongoose";
import QuestionsRoute from "./QuestionsRoute.js";
import cors from "cors";

const app = express();
const PORT = 6001;
mongoose
  .connect(
    "mongodb+srv://boorgusiddharth:siddharthjuly99@siddharth.fiuilki.mongodb.net/?retryWrites=true&w=majority&appName=Siddharth"
  )
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.log(err, "failed db connection");
  });
app.use(cors());

app.use(express.json());
app.use("/api1", QuestionsRoute);

app.get("/", function (req, res) {
  res.send("hi siddharth");
});

app.listen(PORT, () => {
  console.log(`server running successfully at ${PORT}`);
});
