import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'

export interface TimerProps {
  gameOver: boolean
  gameWin: boolean
  sendTime: Dispatch<SetStateAction<number>>
}

let timeIntervalId
const Timer = (props: TimerProps) => {
  const { gameOver, sendTime, gameWin } = props
  const [time, setTime] = useState(0)
  const [sTime, setSTime] = useState(0)

  useEffect(() => {
    if (time > 0 && (gameOver || gameWin)) {
      setSTime(time)
      setTime(0)
    }
  }, [gameOver, time])

  useEffect(() => {
    const incrementTime = () => {
      const newTime = time + 1
      setTime(newTime)
    }

    timeIntervalId = setTimeout(() => {
      incrementTime()
    }, 1000)

    if (gameOver) clearInterval(timeIntervalId)
  }, [time, setTime, gameOver, sendTime])

  return (
    <div style={{ color: 'white', fontSize: 20 }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {gameOver ? sTime : time}
    </div>
  )
}

export default Timer
