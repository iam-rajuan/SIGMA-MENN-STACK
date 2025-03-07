// "use client";
// import React from "react";
// import { useState } from "react";

// const Navbar = () => {
//   const [count, setcount] = useState(0);

//   return (
//     <div>
//       this is counter {count}
//       <button onClick={() => setcount(count + 1)}>Click me</button>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import { useState } from "react";

const Navbar = ({className}) => {
  const [count, setCount] = useState(0);

  return (
    <nav className={`bg-blue-600 p-4 shadow-md ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My Navbar</h1>
        <div className="flex items-center space-x-4">
          <span className="text-white">Counter: {count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300"
          >
            Click me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;