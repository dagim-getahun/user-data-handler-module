import mongoose from "mongoose";

export interface QuestionsHistoryType {
  student_id: mongoose.Types.ObjectId;
  question_id: mongoose.Types.ObjectId;
  question_type: String;
  question_data: Object;
  answer_data: String;
  timestamp?: Date;
}

export interface MongooseResponseType {
  success: Boolean;
  task: String;
  message?: String;
  access_token?: string;
  auth?: boolean;
  error?: any;
  id?: string;
  data?: { count?: number; body?: [QuestionsHistoryType] };
  requestBody?: Record<string, any>;
}
