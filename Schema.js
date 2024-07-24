import mongoose from "mongoose";

const Questions2 = new mongoose.Schema({
  question: { type: String },
  option1: { type: String },
  option2: { type: String },
  option3: { type: String },
  option4: { type: String },
  answer: { type: String },
  time: { type: Number },
  key: { type: Number },
});

const Questions = mongoose.model("Questions", Questions2);
export default Questions;




