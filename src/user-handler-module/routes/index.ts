const express = require("express");
import { UserDataHandlerController } from "../controllers/StudentDataControllers";

const DataController = new UserDataHandlerController();
const UserDataModuleRouter = express.Router();

UserDataModuleRouter.get("/test", DataController.updateSectionProgress);

export default UserDataModuleRouter;
