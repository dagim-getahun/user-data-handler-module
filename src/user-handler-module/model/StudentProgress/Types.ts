import mongoose from "mongoose";

export interface ProgressType {
  sub2: mongoose.Types.ObjectId;
  sub1: mongoose.Types.ObjectId;
  counter: Number;
  complete: Boolean;
  completeDate: Date;
}

export interface StudentProgressType {
  _id?: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  subect: String;
  grade: Number;
  progress?: [ProgressType];
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
  data?: { count?: number; body?: [StudentProgressType] };
  requestBody?: Record<string, any>;
}
