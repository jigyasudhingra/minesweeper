import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'

export interface TimerProps {
  gameOver: boolean
  gameWin: boolean
  sendTime: Dispatch<SetStateAction<number>>
  gameLevel: 'easy' | 'intermediate' | 'hard'
  flag: boolean
  setFlag: Dispatch<SetStateAction<boolean>>
}

let timeIntervalId
const Timer = (props: TimerProps) => {
  const { gameOver, sendTime, gameWin, gameLevel, flag, setFlag } = props
  const [time, setTime] = useState<number>(0)
  const [sTime, setSTime] = useState<number>(0)

  useEffect(() => {
    if (time > 0 && (gameOver || gameWin)) {
      setSTime(time)

      if (gameWin && !flag) {
        const currentTime: any = window.localStorage.getItem(gameLevel)
        const tempTime = JSON.parse(currentTime)

        window.localStorage.setItem(
          gameLevel,
          JSON.stringify(tempTime !== null ? Math.min(time, tempTime) : time)
        )

        window.localStorage.setItem('time', JSON.stringify(time))
        setFlag(true)
      }

      if (!gameWin) window.localStorage.setItem('time', JSON.stringify(time))

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
      <div style={{ display: 'flex ', alignItems: ' center' }}>
        <img
          src="https://www.google.com/logos/fnbx/minesweeper/clock_icon.png"
          alt="clock"
          width={25}
          style={{ marginRight: 4 }}
        />
        <span
          role="img"
          aria-label="flag"
          style={{ color: 'white', fontSize: 20 }}
        >
          {gameOver ? sTime : time}
        </span>
      </div>
    </div>
  )
}

export default Timer
