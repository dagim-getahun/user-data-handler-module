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
