const mongoose = require("mongoose");
const express = require("express");
const fetchRouter = require("./routers/fetchData.routers");
const fetchByType = require("./routers/fetchByType.routers");
const cors = require("cors");
require("dotenv").config();
const app = express();

/** MIDDLEWARES */
app.use(express.json());
app.use(cors());
/** ROUTERS */
app.use("/", fetchRouter);
app.use("/filter", fetchByType);

/** DATABASE CONNECTION */
const databaseURL = process.env.DATABASE_URL;
const atlasdatabaseURL = process.env.ATLAS_DATABASE_URL;
mongoose
  .connect(atlasdatabaseURL)
  .then(() => {
    console.log("Database is Connected Successfully...");
  })
  .catch(() => {
    console.log("Error to connect from Database");
  });

/** SERVER CONNECTION */
try {
  app.listen(5000, () => {
    console.log(
      "Server is connected successfully on PORT: 'http://localhost:5000'"
    );
  });
} catch (error) {
  console.log("Error to start the Server");
}
