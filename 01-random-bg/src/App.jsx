import { useState } from 'react'
import "./App.css"

function App() {
  const [color, setColor] = useState("white")

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const random = `rgb(${red}, ${blue}, ${green})`
    console.log(random);
    return random
  };

  return (
    <>
      <div
        className='bg'
        style={{backgroundColor: color}}
      >
        <button
          className='change-btn'
          onClick={() => setColor(randomColor)}
        >
          Change Color
        </button>
      </div>
    </>
  )
}

export default App
