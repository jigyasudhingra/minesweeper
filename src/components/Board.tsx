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

  const updateFlag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    console.log('Right CLick')
  }

  return (
    <div>
      {board?.map((row: BoardProps[], ind: number) => {
        return (
          <div style={{ display: 'flex' }}>
            {row.map((singleBlock) => {
              return <Cell details={singleBlock} updateFlag={updateFlag} />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
