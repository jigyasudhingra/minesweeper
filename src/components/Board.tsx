import React, { useEffect, useState } from 'react'
import { BoardProps } from '../types/board'
import BoardCreation from '../utils/boardCreation'
import Cell from './Cell'

const Board = () => {
  const [board, setBoard] = useState<Array<BoardProps[]>>([])

  useEffect(() => {
    const generateBoard = () => {
      const getBoard = BoardCreation(5, 5, 10)
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
    console.log(newGrid[x][y])
    newGrid[x][y].flagged = true
    setBoard(newGrid)
  }

  const revealCell = (x: number, y: number) => {
    const newGrid: Array<BoardProps[]> = JSON.parse(JSON.stringify(board))
    console.log(newGrid[x][y])
    newGrid[x][y].revealed = true
    setBoard(newGrid)
  }

  return (
    <div>
      {board?.map((row: BoardProps[], ind: number) => {
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
