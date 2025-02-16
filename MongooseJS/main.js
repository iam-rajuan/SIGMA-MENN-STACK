
// Normal Code

import express from "express";
import mongoose from "mongoose";
import { list, list } from "./models/list.js";

let conn = await mongoose.connect("mongodb://127.0.0.1:27017/list");

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  const newlist = new list({
    name: "Normal One",
    value: 1,
    type: false,
  });
  newlist.save();
  res.send("Hello World!");
});
app.get("/a", async (req, res) => {
  let nlist = list.findOne({})
  console.log(nlist);
  res.json({name: nlist.name})
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});







//Advance Code

// import express from "express";
// import mongoose from "mongoose";
// const app = express();
// const port = 3000;
// import { list } from "./models/list.js";

// //DatabaseConnection
// let conn;
// try{
//   conn = await mongoose.connect("mongodb://127.0.0.1:27017/list");
//   console.log('connected to mongodb');
// }catch{
//   console.log('failed to connect');
// }

// app.get("/", async (req, res) => {
//   res.send("Hello World!");
//   try {
//     const newList = new list({
//       name: "Rajuan",
//       value: 1,
//       type: true,
//     });
//     await newList.save();
//     res.send('data inserted successfully')
//   } catch (error) {
//     console.log.error('error inserting data',error);
//     res.status(500).send('error inserting data')
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

//DeepSeek Code

// import express from "express";
// import mongoose from "mongoose";
// const app = express();
// const port = 3000;
// import { list } from "./models/list.js";

// // Database Connection
// let conn;
// try {
//   conn = await mongoose.connect("mongodb://127.0.0.1:27017/list");
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.error("Failed to connect to MongoDB:", error);
//   process.exit(1); // Exit the process if the connection fails
// }

// app.get("/", async (req, res) => {
//   try {
//     const newList = new list({
//       name: "Rajuan",
//       value: 1,
//       type: true,
//     });
//     await newList.save();
//     res.send("Data inserted successfully!");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).send("Error inserting data");
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// ChatGPT Code

// import express from "express";
// import mongoose from "mongoose";
// import { list } from "./models/list.js";

// const app = express();
// const port = 3000;

// // Middleware for JSON
// app.use(express.json());

// // Function to connect to MongoDB
// async function connectDB() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/list"); // ✅ Fixed
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error);
//     process.exit(1);
//   }
// }

// // Call the function to connect
// connectDB();

// // Route to insert data
// app.get("/", async (req, res) => {
//   try {
//     const newList = new list({
//       name: "Rajuan",
//       value: 1,
//       type: true,
//     });

//     await newList.save();
//     res.send("Data inserted successfully!");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).send("Error inserting data");
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


//Debug

// import express from "express";
// import mongoose from "mongoose";
// import { list } from "./models/list.js";

// const app = express();
// const port = 3000;

// // Middleware for JSON
// app.use(express.json());

// // Function to connect to MongoDB
// async function connectDB() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/list");
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// }

// connectDB();

// // Route to insert data
// app.get("/", async (req, res) => {
//   try {
//     console.log(" Inserting Data..."); // Debugging log
//     const newList = new list({
//       name: "Rajuan",
//       value: 1,
//       type: true,
//     });

//     const result = await newList.save();
//     console.log("Data Saved:", result); // Log saved data
//     res.send("Data inserted successfully!");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).send("Error inserting data");
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
