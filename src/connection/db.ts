const mongoose = require("mongoose");

const MONGOOSE_USERS_DB_URI = process.env.MONGOOSE_USERS_DB_URI;

mongoose.connect(MONGOOSE_USERS_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on("error", () => {
  console.log("Error while connecting to database");
});
database.on("open", () => {
  console.log("Connected to database");
});

module.exports.databaseConnection = database;
