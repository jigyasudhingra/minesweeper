import React from 'react'
import Board from './Board'
import '../App.css'
import MediaQuery from './MediaQuery'

const Sample = () => {
  const { isDeviceSm } = MediaQuery()

  return (
    <div
      style={{
        opacity: 1,
        height: isDeviceSm ? '100%' : '99%',
        width: isDeviceSm ? '100%' : '99%',
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
