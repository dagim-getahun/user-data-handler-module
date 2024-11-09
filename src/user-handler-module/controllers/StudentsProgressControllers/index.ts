import {
  ProgressType,
  StudentProgressType,
} from "../../model/StudentProgress/Types";
import StudentProgressModel from "../../model/StudentProgress";
import { MongooseResponseType } from "../../model/CommonTypes";
import mongoose from "mongoose";
import { ValueOf } from "../../utils/CommonTypes";

const UserDataModelInstance = new StudentProgressModel();

export class UserDataHandlerController {
  // Create Data
  async AddNewStudentData(
    data: Partial<StudentProgressType>
  ): Promise<MongooseResponseType> {
    const createdData = await UserDataModelInstance.CreateData(data);
    return createdData;
  }

  // Read Data
  async GetStudentData(arg: Record<string, any>) {
    const data = await UserDataModelInstance.GetData(arg || {});
    return data;
  }

  async GetStudentDataById(Data_id: String) {
    const data = await UserDataModelInstance.FindById(Data_id || "");
    return data;
  }

  // Modify Data

  async ModifyStudentData(DataInfo: {
    _id: string;
    updatedInfo: Partial<StudentProgressType>;
  }): Promise<MongooseResponseType> {
    const { _id, updatedInfo } = DataInfo;

    const updatedData = await UserDataModelInstance.FindByIdAndUpdate(
      { _id },
      updatedInfo
    );
    return updatedData;
  }

  async AddStudentProgressData(
    _id: string,
    newProgress: Partial<ProgressType>
  ): Promise<MongooseResponseType> {
    const updatedData = await UserDataModelInstance.ChangeNestedObject(
      _id,
      "push",
      newProgress,
      undefined
    );
    updatedData.task = "addProgressData";
    updatedData.message = updatedData.success
      ? "Progress data added successfully"
      : "Error adding progress data";
    return updatedData;
  }

  async UpdateStudentProgressDetail(
    userId: string,
    progressId: string,
    updateDetail: { name: string; value: Partial<ValueOf<ProgressType>> }
  ): Promise<MongooseResponseType> {
    const id = {
      _id: new mongoose.Types.ObjectId(userId),
      "progress._id": new mongoose.Types.ObjectId(progressId),
    };

    const checkComplete = {
      $set: { ["progress.$." + updateDetail.name]: updateDetail.value },
    };

    const updatedData = await UserDataModelInstance.FindOneAndUpdate(
      id,
      checkComplete
    );
    return updatedData;
  }

  // Delete Data

  async RemoveStudentData(userId: string): Promise<MongooseResponseType> {
    const deletedData = await UserDataModelInstance.DeleteById(userId);
    return deletedData;
  }

  async RemoveStudentProgressData(
    userId: string,
    progressId: string
  ): Promise<MongooseResponseType> {
    const deletedData = await UserDataModelInstance.ChangeNestedObject(
      userId,
      "pull",
      {},
      progressId
    );
    deletedData.task = "removeProgressData";
    deletedData.message = deletedData.success
      ? "Progress data removed successfully"
      : "Error removing progress data";
    return deletedData;
  }
}
