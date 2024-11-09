import CommonMongooseMethods from "../mongooseCommon";
import QuestionsModelData from "./Questions";

class QuestionsModel extends CommonMongooseMethods {
  constructor() {
    super(QuestionsModelData);
  }
}

export default QuestionsModel;
