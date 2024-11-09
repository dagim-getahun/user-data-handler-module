import mongoose, { Schema } from "mongoose";
const { databaseConnection } = require("../../../connection/db");

const StudentDataSchemaObject = {
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  school_id: String,
  grade: Number,
  city: String,
  state: String,
  country: String,
  social_media: {
    facebook: String,
    instagram: String,
    twitter: String,
  },
  timestamp: { type: Date, default: new Date() },
};

const StudentDataSchema = new Schema(StudentDataSchemaObject);

const StudentsModelData = databaseConnection.model(
  "students",
  StudentDataSchema
);
export default StudentsModelData;
