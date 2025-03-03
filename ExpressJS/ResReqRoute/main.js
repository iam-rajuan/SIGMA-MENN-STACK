const express = require("express");

const blog = require('./routes/blog.js')
const contact = require('./routes/contact.js')


const app = express();
const port = 3000;

app.use(express.static("Public"));
app.use('/blog', blog)
app.use('/contact', contact)


// GET, POST, PUT, DELETE
app.get("/", (req, res) => {
  console.log("hey this is a get request");
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


//for serving proper html page
app.get("/index", (req, res) => {
  console.log("this is index.html page from main.js");
  res.sendFile("templates/index.html", { root: __dirname });
});
//serving json file
app.get("/api", (req, res) => {
  res.json({ a: "1", b: "2", c: "3", name:["rajuan","hossen"]});
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
