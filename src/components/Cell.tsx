import React from 'react'
import { BoardProps } from '../types/board'

interface CellProps {
  details: BoardProps
  updateFlag: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Cell = (props: CellProps) => {
  const { details, updateFlag } = props
  return (
    <div
      onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        updateFlag(e)
      }
      style={style.cellStyle}
    >
      {details.value}
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
  },
}

export default Cell
