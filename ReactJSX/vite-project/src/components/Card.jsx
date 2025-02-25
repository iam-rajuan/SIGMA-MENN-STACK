import React from 'react'
import {  } from "./Card.css";
const Card = (props) => {
  return (
    <div className='cards'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
