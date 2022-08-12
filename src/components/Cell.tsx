import React from 'react'
import { BoardProps } from '../types/board'
import '../App.css'

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
    // eslint-disable-next-line no-nested-ternary
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
      {details.revealed ? details.value : ''}
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
    return '#aad751'
  }
  if (x % 2 === 0 && y % 2 !== 0) {
    return '#a2d249'
  }
  if (x % 2 !== 0 && y % 2 === 0) {
    return '#a2d249'
  }
  return '#aad751'
}

const mineColor = () => {
  const colors = ['orange', 'darkgreen', 'cyan', 'violet', 'yellow']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default Cell
