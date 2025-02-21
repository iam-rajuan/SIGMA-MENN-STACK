const express = require("express");
// const birds = require('./routes/birds.js')
// const contact = require('./routes/contact.js')

const app = express();
const port = 3000;
const fs = require("fs")

// app.use(express.static("Public"));
// app.use('/birds', birds)
// app.use('/contact', contact)


// MiddlewaresTest
// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })
app.use((req, res, next) => {
  // fs.appendFileSync(`"rajuan.txt", ${'Time:', Date.now()}`)
  console.log(`Middlewares`)
  next()
})


app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  fs.appendFileSync("rajuan.txt", `"Time --> ${time} <-- is Sendig ${req.method} request\n`)
  // console.log(`${Date.now()} is a ${req.method}`)
  next()
})



// GET, POST, PUT, DELETE
app.get("/", (req, res) => {
  console.log("hey this is a GET request for terminal");
  res.send("This is a GET request");
});
app.post("/", (req, res) => {
  console.log("hey this is a POST request");
  res.send("This is a POST request");
});
app.put("/", (req, res) => {
  console.log("hey this is a PUT request");
  res.send("This is a PUT request");
});
app.delete("/", (req, res) => {
  console.log("hey this is a DELETE request");
  res.send("This is a DELETE request");
});


//for serving proper html page
// app.get("/index", (req, res) => {
//   console.log("this is index.html page from main.js");
//   res.sendFile("templates/index.html", { root: __dirname });
// });
//serving json file
app.get("/api", (req, res) => {
  res.json({ a: "1", b: "2", c: "3", name:["rajuan","hossen"]});
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
