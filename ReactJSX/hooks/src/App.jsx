import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
  const a = useRef(0);
  const btnRef = useRef();

  // UseEffect
  useEffect(() => {
    // alert("hey welcome to my page")
  }, []);
  useEffect(() => {
    // alert("count was changed")
    setColor(color + 1);
  }, [count]);

  //UseRef
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rerendering value of a id ${a.current}`);
    btnRef.current.style.backgroundColor = "red";
  });

  // useEffect(() => {
  //   btnRef.current.style.backgroundColor = "red"

  // },[])

  return (
    <>
      <Navbar color={"blue" + color} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <button
          onClick={() => {
            btnRef.current.style.backgroundColor = "blue";
          }}
        >
          Change me
        </button>
        <br /><br />
        <button
          onClick={() => {
            btnRef.current.style.display = "none";
          }}
        >
          Send me moon
        </button>
          <br /><br />
        <button
          onClick={() => {
            btnRef.current.style.display = "block";
          }}
        >
          Bring me back
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
