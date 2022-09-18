/* eslint-disable no-nested-ternary */
import React from 'react'
import { BoardProps } from '../types/board'
import '../App.css'
import Circle from './Circle'

interface CellProps {
  details: BoardProps
  updateFlag: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    x: number,
    y: number
  ) => void
  revealCell: (x: number, y: number) => void
}

const Cell = (props: CellProps) => {
  const { details, updateFlag, revealCell } = props
  const cellStyle = {
    color: numColorCode(details.value),
    background: details.revealed
      ? details.value === -1
        ? mineColor()
        : bombChexPattern(details.x, details.y)
      : chexPattern(details.x, details.y),
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        updateFlag(e, details.x, details.y)
      }
      onClick={() => revealCell(details.x, details.y)}
      onKeyDown={() => revealCell(details.x, details.y)}
      style={cellStyle}
      className="cellStyle"
    >
      {!details.revealed && details.flagged ? (
        <img
          src="	https://www.google.com/logos/fnbx/minesweeper/flag_icon.png"
          alt="flag"
          width={30}
        />
      ) : details.revealed && details.value !== 0 ? (
        details.value === -1 ? (
          <Circle />
        ) : (
          details.value
        )
      ) : (
        ''
      )}
    </div>
  )
}

const bombChexPattern = (x: number, y: number) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return '#e5c29f'
  }
  if (x % 2 === 0 && y % 2 !== 0) {
    return '#d7b899'
  }
  if (x % 2 !== 0 && y % 2 === 0) {
    return '#d7b899'
  }
  return '#e5c29f'
}

const chexPattern = (x: number, y: number) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return '#C38DFA'
  }
  if (x % 2 === 0 && y % 2 !== 0) {
    return '#CAA5EF'
  }
  if (x % 2 !== 0 && y % 2 === 0) {
    return '#CAA5EF'
  }
  return '#C38DFA'
}

const mineColor = () => {
  const colors = ['orange', 'darkgreen', 'cyan', 'violet', 'yellow']
  return colors[Math.floor(Math.random() * colors.length)]
}

const numColorCode = (num: number) => {
  if (num === 1) {
    return '#1976d2'
  }
  if (num === 2) {
    return '#388d3c'
  }
  if (num === 3) {
    return '#d33030'
  }
  if (num === 4) {
    return '#7c21a2'
  }
  if (num === 5) {
    return '#1976d2'
  }
  if (num === 6) {
    return '#1976d2'
  }
  return 'white'
}

export default Cell
