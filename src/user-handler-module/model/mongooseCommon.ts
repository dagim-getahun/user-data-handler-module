import mongoose, { Model, modelNames } from "mongoose";
import {
  MongooseResponseType,
  ProgressType,
  StudentProgressType,
} from "./StudentProgress/Types";

/**
 * Common Mongoose Methods:
 * - CreateData: Creates a new document
 *
 * - GetData: Retrieves documents matching specified criteria
 * - FindById: Finds a single document by its ID
 *
 * - FindByIdAndUpdate: Updates a document by ID and returns updated version
 * - FindOneAndUpdate: Updates first matching document and returns updated version
 *
 * - DeleteById: Removes a document by ID
 * - DeleteNestedObject: Removes a nested object from a document's array field
 */
class CommonMongooseMethods {
  ModelName: Model<any>;

  constructor(ModelName: Model<any>) {
    this.ModelName = ModelName;
  }

  async CreateData(
    data: Partial<StudentProgressType>
  ): Promise<MongooseResponseType> {
    try {
      const createdData = await this.ModelName.create(data);
      return {
        success: true,
        task: "createData",
        data: createdData,
        requestBody: data,
      };
    } catch (error) {
      return {
        success: false,
        task: "createData",
        error: error,
        requestBody: data,
      };
    }
  }

  async GetData(arg: Record<string, any>): Promise<MongooseResponseType> {
    try {
      const data = await this.ModelName.find(arg).exec();
      return {
        success: true,
        task: "fetchData",
        data: {
          count: data.length,
          body: data as [StudentProgressType],
        },
        requestBody: arg,
      };
    } catch (error) {
      return {
        success: false,
        error: error,
        task: "fetchData",
        requestBody: arg,
      };
    }
  }

  async FindById(id: String): Promise<MongooseResponseType> {
    try {
      const data = await this.ModelName.find({ _id: id }).exec();
      return {
        success: true,
        task: "fetchDataById",
        data: {
          count: data.length,
          body: data as [StudentProgressType],
        },
        requestBody: id,
      };
    } catch (error) {
      return {
        success: false,
        task: "fetchDataById",
        error: error,
        requestBody: id,
      };
    }
  }

  async FindByIdAndUpdate(
    selector: Record<
      string,
      string | number | boolean | mongoose.Types.ObjectId
    >,
    data_detail: Record<string, any>
  ): Promise<MongooseResponseType> {
    try {
      const updatedUser = await this.ModelName.findByIdAndUpdate(
        selector._id,
        data_detail,
        {
          new: true,
          // runValidators: true,
        }
      ).exec();

      if (!updatedUser) {
        return {
          success: false,
          task: "modifyData",
          message: "Data not found",
        };
      }

      return {
        success: true,
        task: "modifyData",
        data: updatedUser,
        message: "Data information updated successfully",
      };
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const validationErrors = Object.keys(error.errors).map((key) => ({
          field: key,
          message: error.errors[key].message,
        }));
        return {
          success: false,
          task: "modifyData",
          message: "Validation failed",
          error: validationErrors,
        };
      } else if (error.code === 11000) {
        return {
          success: false,
          task: "modifyData",
          message: "Duplicate field error",
          error: [{ message: "Duplicate field value detected" }],
        };
      } else {
        return {
          success: false,
          task: "modifyData",
          message: "Error updating Data",
          error: [{ message: error.message }],
        };
      }
    }
  }
  async FindOneAndUpdate(
    selector: Record<
      string,
      string | number | boolean | mongoose.Types.ObjectId
    >,
    data_detail: Record<string, any>
  ): Promise<MongooseResponseType> {
    try {
      const updatedUser = await this.ModelName.findOneAndUpdate(
        selector,
        data_detail,
        {
          new: true,
          runValidators: true,
        }
      ).exec();

      if (!updatedUser) {
        return {
          success: false,
          task: "modifyData",
          message: "Data not found",
        };
      }

      return {
        success: true,
        task: "modifyData",
        data: updatedUser,
        message: "Data information updated successfully",
      };
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const validationErrors = Object.keys(error.errors).map((key) => ({
          field: key,
          message: error.errors[key].message,
          kind: error.errors[key].kind,
          value: error.errors[key].value,
        }));
        return {
          success: false,
          task: "modifyData",
          message: "Schema validation failed",
          error: validationErrors,
        };
      } else if (error.name === "CastError") {
        return {
          success: false,
          task: "modifyData",
          message: "Invalid data type",
          error: [
            {
              field: error.path,
              message: `Cannot cast ${error.value} to ${error.kind}`,
              kind: error.kind,
              value: error.value,
            },
          ],
        };
      } else if (error.code === 11000) {
        return {
          success: false,
          task: "modifyData",
          message: "Duplicate field error",
          error: [{ message: "Duplicate field value detected" }],
        };
      } else {
        return {
          success: false,
          task: "modifyData",
          message: "Error updating Data",
          error: [
            {
              message: error.message,
              name: error.name,
            },
          ],
        };
      }
    }
  }

  async DeleteById(id: string): Promise<MongooseResponseType> {
    try {
      const deletedData = await this.ModelName.findByIdAndDelete(id).exec();

      if (!deletedData) {
        return {
          success: false,
          task: "deleteData",
          message: "Document not found",
          requestBody: { id },
        };
      }

      return {
        success: true,
        task: "deleteData",
        message: "Document deleted successfully",
        data: deletedData,
        requestBody: { id },
      };
    } catch (error: any) {
      return {
        success: false,
        task: "deleteData",
        message: "Error deleting document",
        error: [{ message: error.message }],
        requestBody: { id },
      };
    }
  }

  async ChangeNestedObject(
    documentId: string,
    action: string,
    newProgress: Partial<ProgressType>,
    nestedId: string | undefined
  ): Promise<MongooseResponseType> {
    const actions = ["pull", "push", "set"];
    if (!actions.includes(action)) {
      return {
        success: false,
        task: "deleteNestedData",
        message: "Invalid action",
        requestBody: { documentId, nestedId },
      };
    }
    try {
      const updatedDocument = await this.ModelName.findByIdAndUpdate(
        documentId,
        {
          ["$" + action]: {
            progress: action === "pull" ? { _id: nestedId } : newProgress,
          },
        },
        { new: true }
      ).exec();

      if (!updatedDocument) {
        return {
          success: false,
          task: "deleteNestedData",
          message: "Parent document not found",
          requestBody: { documentId, nestedId },
        };
      }

      return {
        success: true,
        task: "deleteNestedData",
        message: "Nested document deleted successfully",
        data: updatedDocument,
        requestBody: { documentId, nestedId },
      };
    } catch (error: any) {
      return {
        success: false,
        task: "deleteNestedData",
        message: "Error deleting nested document",
        error: [{ message: error.message }],
        requestBody: { documentId, nestedId },
      };
    }
  }
}

export default CommonMongooseMethods;
