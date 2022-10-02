import React from 'react'
import Board from './Board'
import '../App.css'

const Sample = () => {
  return (
    <div
      style={{
        opacity: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 10,
      }}
    >
      <div className="App2">
        <Board />
      </div>
    </div>
  )
}

export default Sample
