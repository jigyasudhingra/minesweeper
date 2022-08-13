import React from 'react'
import Board from './components/Board'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <div>Minesweeper</div>
      <Board />
    </div>
  )
}

export default App
