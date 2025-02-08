//Traditional Server

// import { createServer } from 'node:http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World! updated 3\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//Express Server



const express = require("express");
const app = express();
const port = 3000;

//public file access
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send(`
    <h3>Write after url by using "/" like /about</>
                    <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
                <h3>
    `);
});
app.get("/home", (req, res) => {
  res.send("Welcome to Home");
});
app.get("/about", (req, res) => {
  res.send("Tuki its me Rajuan");
});
app.get("/contact", (req, res) => {
  res.send("Contact me: rajuan.official@gmail.com");
});

//Logic to fetch from url to get data
// app.get("/blog/:slug", (req, res) => {
//   res.send(`You Ae: ${req.params.slug}`);
// });

app.get("/blog/:slug", (req, res) => {
  console.log(req);
  res.send(`You looks: ${req.params.slug} and ${req.params.anotherSlug}`);
  
});

//Multiple Slug
app.get("/blog/:slug/:anotherSlug", (req, res) => {
  res.send(`You Looks: ${req.params.slug} and ${req.params.anotherSlug}`);
});

//its a listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
