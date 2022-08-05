import React, { useEffect, useState } from 'react'
import { BoardProps } from '../types/board'
import BoardCreation from '../utils/boardCreation'

const Board = () => {
  const [board, setBoard] = useState<Array<BoardProps[]>>([])

  useEffect(() => {
    const generateBoard = () => {
      const getBoard = BoardCreation(5, 5, 10)
      setBoard(getBoard.board)
    }
    generateBoard()
  }, [])

  return (
    <div>
      {board?.map((row: BoardProps[]) => {
        return (
          <div style={{ display: 'flex' }}>
            {row.map((s) => {
              return (
                <p style={{ width: 30, height: 30 }}>
                  {JSON.stringify(s.value)}
                </p>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
