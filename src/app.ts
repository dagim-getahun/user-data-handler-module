import mongoose from "mongoose";
const expressMain = require("express");
const app = expressMain();
require("dotenv").config();

import { UserDataHandlerController } from "./user-handler-module/controllers/StudentDataControllers";
import { QuestionsHistoryController } from "./user-handler-module/controllers/QuestionHistoryControllers";
const DataControll = new QuestionsHistoryController();

app.use(expressMain.json());

app.get("/test", async (req: any, res: any) => {
  const data = {
    user_id: new mongoose.Types.ObjectId(),
    question_id: new mongoose.Types.ObjectId(),
    question_type: "choice",
    answer_data: "A",
  };

  const response = await DataControll.AddNewQuestionsHistory(data);
  res.json(response);
});

app.listen(1010, () => {
  console.log("Server app running on 1010");
});
