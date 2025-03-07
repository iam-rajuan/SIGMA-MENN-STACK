// "use client"

import fs  from "fs/promises";
import Navbar from "@/components/Navbar";

export default function Home() {
  let a = fs.readFile(".gitignore")
  a.then((e)=>{console.log(e.toString())})
  

  return (
    <div>
        <h1 className="text-center">this is home page</h1>
        <Navbar className="text-2xl" />
    </div>
  );
}
