import { MongooseResponseType } from "../../model/CommonTypes";
import QuestionsModel from "../../model/QuestionsHandler";
import { QuestionsType } from "../../model/QuestionsHandler/Types";
import { QuestionsHistoryType } from "../../model/QuestionsHistory/Types";

const QuestionsModelInstance = new QuestionsModel();

class QuestionsControllers {
  // Create Data
  async AddNewQuestions(
    data: Partial<QuestionsHistoryType>
  ): Promise<MongooseResponseType> {
    const createdData = await QuestionsModelInstance.CreateData(data);
    return createdData;
  }

  // Read Data
  async GetQuestions(arg: Record<string, any>) {
    const data = await QuestionsModelInstance.GetData(arg || {});
    return data;
  }

  // Modify Data
  async ModifyQuestions(DataInfo: {
    _id: string;
    updatedInfo: Partial<QuestionsType>;
  }): Promise<MongooseResponseType> {
    const { _id, updatedInfo } = DataInfo;
    const updatedData = await QuestionsModelInstance.FindByIdAndUpdate(
      { _id },
      updatedInfo
    );
    return updatedData;
  }

  async ModifyQuestionDetails(
    _id: string,
    updatedInfo: Record<string, string | number>
  ): Promise<MongooseResponseType> {
    const updatedData = await QuestionsModelInstance.FindByIdAndUpdate(
      { _id },
      { $set: { [`question_data.${updatedInfo.name}`]: updatedInfo.value } }
    );
    return updatedData;
  }

  // Delete Data
  async DeleteQuestions(Data_id: string) {
    const deletedData = await QuestionsModelInstance.DeleteById(Data_id);
    return deletedData;
  }
}

export default QuestionsControllers;
