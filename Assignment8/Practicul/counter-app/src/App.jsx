import React from 'react'
import CounterApp from './components/CounterApp'

function App() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Redux Counter App</h1>
      <CounterApp />
    </div>
  )
}

export default App
