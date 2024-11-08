import mongoose, { Schema } from "mongoose";
const { databaseConnection } = require("../../../connection/db");

const StudentDataSchemaObject = {
  user_id: mongoose.Types.ObjectId,
  subect: String,
  grade: Number,
  progress: [
    {
      sub1: mongoose.Types.ObjectId,
      sub2: mongoose.Types.ObjectId,
      counter: Number,
      complete: Boolean,
      completeDate: Date,
    },
  ],
  timestamp: { type: Date, default: new Date() },
};

const StudentDataSchema = new Schema(StudentDataSchemaObject);

const StudentProgressModel = databaseConnection.model(
  "student-progress",
  StudentDataSchema
);
export default StudentProgressModel;
