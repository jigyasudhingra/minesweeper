import React, { useState } from 'react'
import './App.css'
import Sample from './components/Sample'

const App: React.FC = () => {
  const [click, setClick] = useState(false)
  return (
    <div className="App">
      {click && <Sample />}
      <button type="button" onClick={() => setClick(true)}>
        Play Game
      </button>
    </div>
  )
}

export default App
