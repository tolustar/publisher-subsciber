require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 6000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/:route", (req, res) => {
  const route = req.params.route;
  const data = req.body.data;

  console.log(
    "\nNew message from PUBLISHER [https://localhost:8000] ==>",
    data,
    `\nSUBSCRIBER ===> https://localhost:${PORT}/${route}`
  );

  res.status(200).json({
    code: 200,
    data,
    message: `New message from publisher`,
  });
});

app.listen(PORT, () => {
  console.log(`Subscriber listening on port ${PORT}!`);
});

module.exports = app;
