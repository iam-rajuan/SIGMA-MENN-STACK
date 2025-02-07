import { readFile } from "fs";
import fs  from "fs/promises";


let a =  await fs.readFile("rajuan.txt")
console.log(a.toString());

// let b = await fs.writeFile("rajuan.txt", "this is another fs/promise file")

let c = await fs.appendFile("rajuan.txt", "\n another new Promises Appended")

// console.log(a.toString(),b);
