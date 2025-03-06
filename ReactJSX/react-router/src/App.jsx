import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nav/><Home/></>
    },
    {
      path: "/login",
      element: <><Nav/><Login/></>
    },
    {
      path: "/about",
      element: <><Nav/><About/></>
    },
    {
      path: "/user",
      element: <><Nav/><User/></>
    },
    {
      path: "/user/:username",
      element: <><Nav/><User/></>
    },
  
  ])

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
