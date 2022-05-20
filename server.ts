// creating my project server

import express from "express";
import mssql from "mssql";

// import sqlConfig from "./config/config";
import router from "./routes/todo.routes";
import sqlConfig from "./config/config";

const app = express();

//  connecting to todoappdb
const connectToDB = async () => {
  try {
    await mssql.connect(sqlConfig);
    console.log("Database connected!");
  } catch (err: any) {
    console.log("Error occured when connecting to DB");
  }
};

app.use(express.json());
app.use("/todos", router);

app.listen(7000, async () => {
  console.log("App running on port  7000");
  await connectToDB();
});
