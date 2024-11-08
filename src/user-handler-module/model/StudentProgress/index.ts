import CommonMongooseMethods from "../mongooseCommon";
import UserDataModel from "./StudentData";

class StudentProgressModel extends CommonMongooseMethods {
  constructor() {
    super(UserDataModel);
  }
}

export default StudentProgressModel;
