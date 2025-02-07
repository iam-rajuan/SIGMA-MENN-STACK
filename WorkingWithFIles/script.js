// const fs = require("fs");
import fs from "fs";

// console.log(fs);

console.log("Starting");

// fs.writeFileSync("rajuan.txt", "1. this is a main text file 1")
// fs.writeFile("rajuan.txt", "\nthis is a writeFile 1", ()=>{
//     console.log("done 1");
//     fs.readFile("rajuan.txt", (error,data)=>{
//         console.log(error,data.toString());
//         // again
//         fs.writeFile("rajuan.txt", "\nthis is a text file of writeFile 2", ()=>{
//             console.log("done 2");
//             fs.readFile("rajuan.txt", (error,data)=>{
//                 console.log(error,data.toString());
//                 // again
//                 fs.writeFile("rajuan.txt", "\nthis is a text file of writeFile 3", ()=>{
//                     console.log("done 3");
//                     fs.readFile("rajuan.txt", (error,data)=>{
//                         console.log(error,data.toString());
//                         // again
//                     })
//                 })
//             })
//         })
//     })
// })

// fs.writeFile("rajuan.txt", "\n3. this is a text file of writeFile 3", () => {
//   console.log("done 3");
//   fs.readFile("rajuan.txt", (error, data) => {
//     console.log(error, data.toString());
//     // again
//   });
// });
// fs.writeFile("rajuan.txt", "\n4. this is a text file of writeFile 4", () => {
//   console.log("done 3");
//   fs.readFile("rajuan.txt", (error, data) => {
//     console.log(error, data.toString());
//     // again
//   });
// });

// fs.writeFile("rajuan.txt", "\n10. this is a  write file 10", () => {
//   console.log("done 4");
//   fs.readFile("rajuan.txt", (error, data) => {
//     console.log(error, data.toString());
//     // again
//   });
// });

// // fs.writeFile("rajuan.txt", "this is a text file of writeFile", ()=>{
// //     console.log("done");
// //     fs.readFile("rajuan.txt", (error,data)=>{
// //         console.log(error,data.toString());
// //         // again
// //     })
// // })

fs.appendFile("rajuan.txt", "\n this is new appended file", (e, d) => {
  console.log(d);
});
console.log("Ending");
