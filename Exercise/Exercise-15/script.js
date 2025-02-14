import fs from "fs/promises";
import fsn, { readdir } from "fs";
import path from "path";

let mainpath =
  "/home/iam-rajuan/Documents/Web-Development-Practice/SIGMA-MENN-STACK/Exercise/Exercise-15";

let files = await fs.readdir(mainpath);

// console.log(files);
for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];
  console.log(ext);

  if (ext != "js" && ext != "json") {
    if (fsn.existsSync(ext)) {
      fs.rename(path.join(mainpath, item), path.join(mainpath, ext, item));
    } else {
      fs.mkdir(ext);
    }
  }
}
