require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const routes = require("./routes");
const {
  appErrorHandler,
  genericErrorHandler,
} = require("./config/error.config");

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(routes);
app.use(appErrorHandler);
app.use(genericErrorHandler);

app.listen(PORT, () => {
  console.log(`Publisher listening on port ${PORT}!`);
});
