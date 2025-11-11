import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/counterSlice'

export default function CounterApp() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => dispatch(increment())} style={btnStyle}>Increment</button>
        <button onClick={() => dispatch(decrement())} style={btnStyle}>Decrement</button>
        <button onClick={() => dispatch(reset())} style={btnStyle}>Reset</button>
      </div>
    </div>
  )
}

const btnStyle = {
  padding: '10px 15px',
  margin: '0 5px',
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
}
