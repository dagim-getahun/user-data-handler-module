import mongoose from "mongoose";
const expressMain = require("express");
const app = expressMain();
require("dotenv").config();

import { UserDataHandlerController } from "./user-handler-module/controllers/StudentDataControllers";
import { QuestionsHistoryController } from "./user-handler-module/controllers/QuestionHistoryControllers";
import QuestionsControllers from "./user-handler-module/controllers/QuestionsControllers";
const DataControll = new QuestionsHistoryController();
const QuestionsControll = new QuestionsControllers();

app.use(expressMain.json());

app.get("/test", async (req: any, res: any) => {
  const data = {
    subject: "Math",
    grade: 10,
    question_source: "text",
    question_type: "choice",
    question_data: {
      question: "What is the capital of France?",
      options: { A: "Paris", B: "London", C: "Berlin", D: "Madrid" },
      correct_answer: "A",
    },
    attempt_count: 0,
    correct_count: 0,
    wrong_count: 0,
  };

  const response = await QuestionsControll.ModifyQuestionDetails(
    "672f43ad226057f80e091062",
    { name: "question", value: "What is the capital city of France?" }
  );
  res.json(response);
});

app.listen(1010, () => {
  console.log("Server app running on 1010");
});
