import QuestionsHistoryModel from "../../model/QuestionsHistory";
import { QuestionsHistoryType } from "../../model/QuestionsHistory/Types";
import { MongooseResponseType } from "../../model/CommonTypes";
const QuestionsHistoryModelInstance = new QuestionsHistoryModel();

export class QuestionsHistoryController {
  // Create Data
  async AddNewQuestionsHistory(
    data: Partial<QuestionsHistoryType>
  ): Promise<MongooseResponseType> {
    const createdData = await QuestionsHistoryModelInstance.CreateData(data);
    return createdData;
  }

  // Read Data
  async GetQuestionsHistory(arg: Record<string, any>) {
    const data = await QuestionsHistoryModelInstance.GetData(arg || {});
    return data;
  }

  // Modify Data
  async ModifyQuestionsHistory(DataInfo: {
    _id: string;
    updatedInfo: Partial<QuestionsHistoryType>;
  }): Promise<MongooseResponseType> {
    const { _id, updatedInfo } = DataInfo;
    const updatedData = await QuestionsHistoryModelInstance.FindByIdAndUpdate(
      { _id },
      updatedInfo
    );
    return updatedData;
  }

  // Delete Data
  async DeleteQuestionsHistory(Data_id: string) {
    const deletedData = await QuestionsHistoryModelInstance.DeleteById(Data_id);
    return deletedData;
  }
}

export default QuestionsHistoryController;
