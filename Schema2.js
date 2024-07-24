import mongoose from "mongoose";

const Questions3 = new mongoose.Schema({
  question: { type: String },
  option1: { type: String },
  option2: { type: String },
  option3: { type: String },
  option4: { type: String },
  answer: { type: String },
  time: { type: Number },
  key: { type: Number },
});

const Questions4 = mongoose.model("Correct Question", Questions3);
export default Questions4;
