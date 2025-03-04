import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Form, setForm] = useState({})
  // const [Form, setForm] = useState({email:"", phone:""})

  const handleClick = ()=>{
    alert("Hey I am clicked")
  }
  const handleChange = (e)=>{
    setForm({...Form,[e.target.name]:e.target.value})
    console.log(Form);
    
  }

  return (
    <>
    <div className="button">
      <button onClick={handleClick}>Submit</button></div>   
      <input type="text" name='email' value={Form.email?Form.email:""} onChange={handleChange} />
      <input type="text" name='phone' value={Form.phone?Form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
