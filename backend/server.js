const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const dummyData = require("./dummyData.json");

let currentIndex = 0;

app.get("/location", (req, res) => {
  const location = dummyData[currentIndex];
  currentIndex = (currentIndex + 1) % dummyData.length;
  res.json(location);
});

app.get("/route", (req, res) => {
  res.json(dummyData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
