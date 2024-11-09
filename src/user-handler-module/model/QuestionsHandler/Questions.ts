import mongoose, { Schema } from "mongoose";
const { databaseConnection } = require("../../../connection/db");

const QuestionsSchemaObject = {
  subject: String,
  grade: Number,
  question_source: String,
  question_type: String,
  question_data: {
    question: String,
    options: { A: String, B: String, C: String, D: String },
    correct_answer: String,
  },
  attempt_count: Number,
  correct_count: Number,
  wrong_count: Number,
  timestamp: { type: Date, default: new Date() },
};

const QuestionsSchema = new Schema(QuestionsSchemaObject);

const QuestionsModelData = databaseConnection.model(
  "questions",
  QuestionsSchema
);
export default QuestionsModelData;
