import React from 'react'
import { BoardProps } from '../types/board'

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
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        updateFlag(e, details.x, details.y)
      }
      onClick={() => revealCell(details.x, details.y)}
      onKeyDown={() => revealCell(details.x, details.y)}
      style={style.cellStyle}
    >
      {details.revealed ? details.value : ''}
    </div>
  )
}

const style = {
  cellStyle: {
    width: 40,
    height: 40,
    background: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
  },
}

export default Cell
