import React, { useEffect, useState } from 'react'
import { BoardProps } from '../types/board'
import BoardCreation from '../utils/boardCreation'
import revealed from '../utils/reveal'
import BoxHeader from './BoxHeader'
import Cell from './Cell'
import Modal from './Modal'

const Board = () => {
  const [board, setBoard] = useState<Array<BoardProps[]>>([])
  const [nonMinesCount, setNonMinesCount] = useState(0)
  const [minesLocations, setMinesLocations] = useState<any>([])
  const [gameOver, setGameOver] = useState(false)
  const [newTime, setTime] = useState(0)
  const [flagCount, setFlagCount] = useState(15)

  const freshBoard = () => {
    const newBoard = BoardCreation(10, 10, 15)
    setNonMinesCount(10 * 10 - 15)
    setMinesLocations(newBoard.mineLocation)
    setBoard(newBoard.board)
  }

  const restartGame = () => {
    freshBoard()
    setGameOver(false)
  }

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
    if (flagCount <= 0) return
    const newGrid: Array<BoardProps[]> = JSON.parse(JSON.stringify(board))
    if (newGrid[x][y].flagged === true) return
    newGrid[x][y].flagged = true
    setFlagCount(flagCount - 1)
    setBoard(newGrid)
  }

  const revealCell = (x: number, y: number) => {
    if (board[x][y].revealed || gameOver) {
      return
    }
    const newGrid: Array<BoardProps[]> = JSON.parse(JSON.stringify(board))
    if (newGrid[x][y].value === -1) {
      for (let i = 0; i < minesLocations.length; i += 1)
        newGrid[minesLocations[i][0]][minesLocations[i][1]].revealed = true
      setBoard(newGrid)
      setGameOver(true)
    } else {
      const newRevealedBoard = revealed(newGrid, x, y, nonMinesCount)
      setBoard(newRevealedBoard.arr)
      setNonMinesCount(newRevealedBoard.mines)
      if (newRevealedBoard.mines === 0) setGameOver(true)
    }
  }

  return (
    <div
      style={{ boxShadow: '0 4px 3px rgba(0,0,0,0.3)', position: 'relative' }}
    >
      {gameOver && <Modal restartGame={restartGame} />}
      <BoxHeader gameOver={gameOver} setTime={setTime} flagCount={flagCount} />
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
