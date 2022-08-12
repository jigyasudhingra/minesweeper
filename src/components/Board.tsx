import React, { useEffect, useState } from 'react'
import { BoardProps } from '../types/board'
import BoardCreation from '../utils/boardCreation'
import revealed from '../utils/reveal'
import Cell from './Cell'

const Board = () => {
  const [board, setBoard] = useState<Array<BoardProps[]>>([])
  const [nonMinesCount, setNonMinesCount] = useState(0)
  const [minesLocations, setMinesLocations] = useState<any>([])

  useEffect(() => {
    const generateBoard = () => {
      const getBoard = BoardCreation(10, 10, 15)
      setBoard(getBoard.board)
      setMinesLocations(getBoard.mineLocation)
      setNonMinesCount(10 * 10 - 15)
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
    newGrid[x][y].flagged = true
    setBoard(newGrid)
  }

  const revealCell = (x: number, y: number) => {
    const newGrid: Array<BoardProps[]> = JSON.parse(JSON.stringify(board))
    if (newGrid[x][y].value === -1) {
      for (let i = 0; i < minesLocations.length; i += 1)
        newGrid[minesLocations[i][0]][minesLocations[i][1]].revealed = true
      setBoard(newGrid)
    } else {
      const newRevealedBoard = revealed(newGrid, x, y, nonMinesCount)
      setBoard(newRevealedBoard.arr)
      setNonMinesCount(newRevealedBoard.mines)
    }
  }

  return (
    <div>
      <p>{nonMinesCount}</p>
      <div
        style={{
          padding: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
    </div>
  )
}

export default Board
