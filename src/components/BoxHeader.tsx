import React, { Dispatch, SetStateAction } from 'react'
import Timer from './Timer'

interface BoxHeaderProps {
  gameOver: boolean
  gameWin: boolean
  setTime: Dispatch<SetStateAction<number>>
  flagCount: number
  setGameLevel: Dispatch<SetStateAction<'easy' | 'intermediate' | 'hard'>>
  gameLevel: 'easy' | 'intermediate' | 'hard'
  flag: boolean
  setFlag: Dispatch<SetStateAction<boolean>>
}

const BoxHeader = (props: BoxHeaderProps) => {
  const {
    gameOver,
    setTime,
    flagCount,
    setGameLevel,
    gameWin,
    gameLevel,
    flag,
    setFlag,
  } = props

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
        onChange={(e: any) => {
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
      <Timer
        gameOver={gameOver}
        gameWin={gameWin}
        sendTime={setTime}
        gameLevel={gameLevel}
        flag={flag}
        setFlag={setFlag}
      />
    </div>
  )
}

export default BoxHeader
