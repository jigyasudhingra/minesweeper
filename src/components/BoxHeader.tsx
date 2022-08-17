import React, { Dispatch, SetStateAction } from 'react'
import Timer from './Timer'

interface BoxHeaderProps {
  gameOver: boolean
  gameWin: boolean
  setTime: Dispatch<SetStateAction<number>>
  flagCount: number
  setGameLevel: Dispatch<SetStateAction<string>>
}

const BoxHeader = (props: BoxHeaderProps) => {
  const { gameOver, setTime, flagCount, setGameLevel, gameWin } = props

  return (
    <div
      style={{
        background: '#4a752c',
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <select
        name="game-levels"
        id="levels"
        onChange={(e) => {
          setGameLevel(e.target.value)
          setTime(0)
        }}
      >
        <option value="easy">Easy</option>
        <option value="intermediate">Intermediate</option>
        <option value="hard">Hard</option>
      </select>
      <span
        role="img"
        aria-label="flag"
        style={{ color: 'white', fontSize: 20 }}
      >
        🚩 {flagCount}
      </span>
      <Timer gameOver={gameOver} gameWin={gameWin} sendTime={setTime} />
    </div>
  )
}

export default BoxHeader
