import React, { useState} from 'react'
import './counter.css'


const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
         setCount((prevCount)=> prevCount + 1)
    }
    const decrement = () => {
         setCount((prevCount)=> prevCount - 1)
    }
  return (
    <div className='counter'>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter