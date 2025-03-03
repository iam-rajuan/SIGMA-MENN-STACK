import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(20)

  return (
    <>
     <div> the count is {count}</div>
     <button onClick={()=>{setCount(count+1)}}>update button</button>
    </>
  )
}

export default App
