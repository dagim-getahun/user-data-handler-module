import { Model } from "mongoose";
import { MongooseResponseType } from "../../model/CommonTypes";
import StudentsModel from "../../model/StudentsInfo";
import { StudentsType } from "../../model/StudentsInfo/Types";

const StudentModelInstance = new StudentsModel();

class StudentsControllers {
  // Create Data
  async AddNewStudent(data: StudentsType): Promise<MongooseResponseType> {
    return await StudentModelInstance.CreateData(data);
  }

  // Read Data
  async GetStudentData(arg: Record<string, any>) {
    return await StudentModelInstance.GetData(arg || {});
  }

  // Update Data
  async ModifyStudentData(
    _id: string,
    updatedInfo: Partial<StudentsType>
  ): Promise<MongooseResponseType> {
    return await StudentModelInstance.FindByIdAndUpdate({ _id }, updatedInfo);
  }

  // Delete Data
  async DeleteStudentData(_id: string): Promise<MongooseResponseType> {
    return await StudentModelInstance.DeleteById(_id);
  }
}

export default StudentsControllers;
