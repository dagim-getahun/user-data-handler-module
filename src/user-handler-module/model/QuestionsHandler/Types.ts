import mongoose from "mongoose";

export interface QuestionsType {
  subject: String;
  grade: Number;
  question_source: String;
  question_type: String;
  question_data: Record<string, any>;
  attempt_count: Number;
  correct_count: Number;
  wrong_count: Number;
  timestamp?: Date;
}
