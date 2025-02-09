const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("Public"));

app.get("/", (req, res) => {
  console.log("hey this is a get reques");
  res.send("This is a GET request");
});

app.post("/", (req, res) => {
  console.log("hey this is a post request");
  res.send("This is a POST request");
});
app.put("/", (req, res) => {
  console.log("hey this is a DELETE request");
  res.send("This is a PUT request");
});
app.delete("/", (req, res) => {
  console.log("hey this is a DELETE request");
  res.send("This is a DELETE request");
});

app.get("/index", (req, res) => {
  console.log("this is index.html page from main.js");
  res.sendFile("templates/index.html", { root: __dirname });
});
app.get("/api", (req, res) => {
  res.json({ a: "1", b: "2", c: "3", name:["rajuan","hossen"]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
