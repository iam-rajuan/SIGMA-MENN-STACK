const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("Public"));

app.get("/", (req, res) => {
  console.log("hey this is a get reques");
  res.send("This is a GET request");
});

app.post("/", (req, res) => {
  console.log("hey this is a post reques");

  res.send("This is a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
