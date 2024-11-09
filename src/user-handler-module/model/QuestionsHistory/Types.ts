import mongoose from "mongoose";

export interface QuestionsHistoryType {
  student_id: mongoose.Types.ObjectId;
  question_id: mongoose.Types.ObjectId;
  question_type: String;
  question_data: Object;
  answer_data: String;
  timestamp?: Date;
}
