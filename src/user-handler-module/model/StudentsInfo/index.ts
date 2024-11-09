import CommonMongooseMethods from "../mongooseCommon";
import StudentsModelData from "./StudentData";

class StudentsModel extends CommonMongooseMethods {
  constructor() {
    super(StudentsModelData);
  }
}

export default StudentsModel;
