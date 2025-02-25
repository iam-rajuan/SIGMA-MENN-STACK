import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <div className="card">
        <Card title="card 1" description="this is description of card 1" />
        <Card title="card 2" description="this is description of card 2" />
        <Card title="card 3" description="this is description of card 3" />
        <Card title="card 4" description="this is description of card 4" />
      </div>
      <Footer />
    </>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
