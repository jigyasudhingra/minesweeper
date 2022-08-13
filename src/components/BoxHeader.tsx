import React, { Dispatch, SetStateAction } from 'react'
import Timer from './Timer'

interface BoxHeaderProps {
  gameOver: boolean
  setTime: Dispatch<SetStateAction<number>>
}

const BoxHeader = (props: BoxHeaderProps) => {
  const { gameOver, setTime } = props
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
      <span role="img" aria-label="flag" style={{ paddingBottom: 10 }}>
        🚩
      </span>
      <Timer gameOver={gameOver} sendTime={setTime} />
    </div>
  )
}

export default BoxHeader
