import { useEffect } from "react"
import React from 'react'


const Navbar = ({color}) => {
    useEffect(() => {
        // alert("color was changed")
      }, [color])
  return (
    <div>
      This is a navbar of {color} color navbar
    </div>
  )
}

export default Navbar
