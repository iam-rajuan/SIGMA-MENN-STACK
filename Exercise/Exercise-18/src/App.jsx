import {useState, useEffect } from 'react'
import './App.css'




function App() {

  const [cards, setCards] = useState([])

  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data);
  }


  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className="container">
        {cards.map((card)=>{
            return <div key={card.id} className="card">
              <h1><span>title: </span>{card.title}</h1>
              <p><span>body: </span>{card.body}</p>
              <span>By: UserId: {card.userId}</span>
            </div>
          })}

      </div>
    </>
  )
}

export default App
