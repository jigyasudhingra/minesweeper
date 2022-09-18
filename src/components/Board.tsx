import React, { useEffect, useState } from 'react'
import { BoardProps } from '../types/board'
import BoardCreation from '../utils/boardCreation'
import revealed from '../utils/reveal'
import BoxHeader from './BoxHeader'
import Cell from './Cell'
import Modal from './Modal'

interface GameConfigurationProps {
  width: number
  height: number
  mines: number
}
interface GameLevelProps {
  easy: GameConfigurationProps
  intermediate: GameConfigurationProps
  hard: GameConfigurationProps
}

const GameLevels: GameLevelProps = {
  easy: {
    width: 10,
    height: 10,
    mines: 10,
  },
  intermediate: {
    width: 16,
    height: 16,
    mines: 40,
  },
  hard: {
    width: 30,
    height: 16,
    mines: 99,
  },
}

const Board: React.FC = () => {
  const [board, setBoard] = useState<Array<BoardProps[]>>([])
  const [nonMinesCount, setNonMinesCount] = useState(0)
  const [minesLocations, setMinesLocations] = useState<any>([])
  const [gameOver, setGameOver] = useState(false)
  const [newTime, setTime] = useState(0)
  const [gameLevel, setGameLevel] = useState<'easy' | 'intermediate' | 'hard'>(
    'easy'
  )
  const [width, setWidth] = useState(GameLevels.easy.width)
  const [height, setHeight] = useState(GameLevels.easy.height)
  const [mines, setMines] = useState(GameLevels.easy.mines)
  const [flagCount, setFlagCount] = useState(mines)
  const [gameWin, setGameWin] = useState(false)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (gameLevel === 'easy') {
      setWidth(GameLevels.easy.width)
      setHeight(GameLevels.easy.height)
      setMines(GameLevels.easy.mines)
    }
    if (gameLevel === 'intermediate') {
      setWidth(GameLevels.intermediate.width)
      setHeight(GameLevels.intermediate.height)
      setMines(GameLevels.intermediate.mines)
    }
    if (gameLevel === 'hard') {
      setWidth(GameLevels.hard.width)
      setHeight(GameLevels.hard.height)
      setMines(GameLevels.hard.mines)
    }
  }, [gameLevel, setGameLevel])

  const freshBoard = () => {
    const newBoard = BoardCreation(width, height, mines)
    setFlagCount(mines)
    setNonMinesCount(width * height - mines)
    setMinesLocations(newBoard.mineLocation)
    setBoard(newBoard.board)
  }

  const restartGame = () => {
    freshBoard()
    if (gameWin) {
      setGameWin(false)
      setFlag(false)
    }
    setGameOver(false)
  }

  useEffect(() => {
    const generateBoard = () => {
      const getBoard = BoardCreation(width, height, mines)
      setFlagCount(mines)
      setMinesLocations(getBoard.mineLocation)
      setNonMinesCount(width * height - mines)
      setBoard(getBoard.board)
    }
    generateBoard()
    restartGame()
  }, [width])

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
      if (newRevealedBoard.mines === 0) setGameWin(true)
    }
  }

  return (
    <div
      style={{
        boxShadow: '0 4px 3px rgba(0,0,0,0.3)',
        position: 'relative',
        margin: 40,
      }}
    >
      {(gameOver || gameWin) && (
        <Modal
          restartGame={restartGame}
          gameLevel={gameLevel}
          gameWin={gameWin}
        />
      )}
      <BoxHeader
        gameOver={gameOver}
        gameWin={gameWin}
        setTime={setTime}
        flagCount={flagCount}
        setGameLevel={setGameLevel}
        gameLevel={gameLevel}
        flag={flag}
        setFlag={setFlag}
        restartGame={restartGame}
      />
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
