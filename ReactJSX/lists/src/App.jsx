import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ShowButton, setShowButton] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "todo 1",
      desc: "this is list of todos 1"
    },
    {
      title: "todo 2",
      desc: "this is list of todos 2"
    },
    {
      title: "todo 3",
      desc: "this is list of todos 3"
    },
  ])

  const Todo = ({todo})=>{
    return (<>
    <div className='m-4 border-1 border-purple-800 rounded-xl' >

      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </div>
    </>)
  }

  return (
    <>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> <br /><br />
        {ShowButton? <button>true</button>: <button>false</button>}

        <br /><br />
        <button onClick={() => setShowButton((!ShowButton))}>
          toggle button
        </button>

        {todos.map(todo=>{
          return <Todo todo={todo}/>
        })}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
