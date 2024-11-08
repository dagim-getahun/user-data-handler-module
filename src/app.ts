import mongoose from "mongoose";
const expressMain = require("express");
const app = expressMain();
require("dotenv").config();

import { UserDataHandlerController } from "./user-handler-module/controllers/StudentDataControllers";

const DataControll = new UserDataHandlerController();

app.use(expressMain.json());

app.get("/test", async (req: any, res: any) => {
  res.json();
});

app.listen(1010, () => {
  console.log("Server app running on 1010");
});
