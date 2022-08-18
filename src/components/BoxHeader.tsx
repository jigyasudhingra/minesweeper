/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  restartGame: any
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
    restartGame,
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
        style={{
          fontWeight: 600,
          borderRadius: 7,
          padding: 3,
        }}
      >
        <option value="easy">Easy</option>
        <option value="intermediate">Intermediate</option>
        <option value="hard">Hard</option>
      </select>
      <div style={{ display: 'flex ', alignItems: ' center' }}>
        <img
          src="	https://www.google.com/logos/fnbx/minesweeper/flag_icon.png"
          alt="flag"
          width={25}
          style={{ marginBottom: 4 }}
        />
        <span
          role="img"
          aria-label="flag"
          style={{ color: 'white', fontSize: 20 }}
        >
          {flagCount}
        </span>
      </div>
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
