/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import '../App.css'

const Modal = ({ restartGame, gameWin }: any) => {
  const [render, setRender] = useState(false)
  const currentTime: any = window.localStorage.getItem('time')
  const time = JSON.parse(currentTime)

  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, 1000)
  }, [])

  return (
    <div
      style={{
        opacity: render ? 1 : 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
        background: 'rgba(0,0,0,0.3)',
      }}
    >
      <div id="gameOverImage">
        <div style={{ paddingTop: 70, paddingBottom: 70 }}>
          <div>
            <img
              src="https://www.google.com/logos/fnbx/minesweeper/clock_icon.png"
              alt="trophy"
              height={45}
              width="auto"
            />
          </div>
          <div>{gameWin ? time : '-----'}</div>
        </div>
        <div>
          <div>
            <img
              src="https://www.google.com/logos/fnbx/minesweeper/trophy_icon.png"
              alt="trophy"
              height={45}
              width="auto"
            />
          </div>
          <div>{gameWin ? time : '-----'}</div>
        </div>
      </div>
      <div className="tryAgain" onClick={() => restartGame()}>
        {gameWin ? 'New Game' : 'Try Again'}
      </div>
    </div>
  )
}

export default Modal
