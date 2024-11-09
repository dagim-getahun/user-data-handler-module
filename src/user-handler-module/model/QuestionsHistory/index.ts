import CommonMongooseMethods from "../mongooseCommon";
import QuestionsHistory from "./QuestionHistory";

class QuestionsHistoryModel extends CommonMongooseMethods {
  constructor() {
    super(QuestionsHistory);
  }
}

export default QuestionsHistoryModel;
