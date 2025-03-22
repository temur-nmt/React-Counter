import { useState } from 'react'
import './App.css'

function App() {

  const [currentCount, setCurrentCount] = useState(0)

  const handleCurrentCount = (add: Boolean) => {
    setCurrentCount(prevCount => add? ++prevCount : --prevCount)
  }

  return (
    <>
      <h1>Increase or Decrease the Counter!</h1>
      <div className='counter'>
        <button className='counter-btn' onClick={() => handleCurrentCount(false)}>-</button>
        <h2 className='count'>{currentCount}</h2>
        <button className='counter-btn' onClick={() => handleCurrentCount(true)}>+</button>
      </div>
    </>
  )
}

export default App
