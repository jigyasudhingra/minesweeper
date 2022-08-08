import React, { useEffect, useState } from 'react'
import { BoardProps } from '../types/board'
import BoardCreation from '../utils/boardCreation'
import revealed from '../utils/reveal'
import Cell from './Cell'

const Board = () => {
  const [board, setBoard] = useState<Array<BoardProps[]>>([])

  useEffect(() => {
    const generateBoard = () => {
      const getBoard = BoardCreation(15, 15, 20)
      setBoard(getBoard.board)
    }
    generateBoard()
  }, [])

  const updateFlag = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    x: number,
    y: number
  ) => {
    e.preventDefault()
    const newGrid: Array<BoardProps[]> = JSON.parse(JSON.stringify(board))
    console.error(newGrid[x][y])
    newGrid[x][y].flagged = true
    setBoard(newGrid)
  }

  const revealCell = (x: number, y: number) => {
    const newGrid: Array<BoardProps[]> = JSON.parse(JSON.stringify(board))
    if (newGrid[x][y].value === -1) alert('Mine Found')
    else {
      const newRevealedBoard = revealed(newGrid, x, y, 1)
      setBoard(newRevealedBoard.arr)
    }
  }

  return (
    <div>
      {board?.map((row: BoardProps[]) => {
        return (
          <div style={{ display: 'flex' }}>
            {row.map((singleBlock) => {
              return (
                <Cell
                  details={singleBlock}
                  updateFlag={updateFlag}
                  revealCell={revealCell}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
