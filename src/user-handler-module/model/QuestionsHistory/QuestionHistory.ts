import mongoose, { Schema } from "mongoose";
const { databaseConnection } = require("../../../connection/db");

const QuestionsHistorySchemaObject = {
  student_id: mongoose.Types.ObjectId,
  question_id: mongoose.Types.ObjectId,
  question_type: String,
  answer_data: String,
  timestamp: { type: Date, default: new Date() },
};

const QuestionsHistorySchema = new Schema(QuestionsHistorySchemaObject);

const QuestionsHistoryModel = databaseConnection.model(
  "questions-history",
  QuestionsHistorySchema
);
export default QuestionsHistoryModel;
