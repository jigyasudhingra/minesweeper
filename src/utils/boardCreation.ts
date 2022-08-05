import { BoardProps } from '../types/board'

const BoardCreation = (row: number, col: number, bombs: number) => {
  const board: Array<BoardProps[]> = []
  const mineLocation: Array<number[]> = []

  // Create blank board
  // x = column
  for (let x = 0; x < row; x += 1) {
    const subCol = []
    for (let y = 0; y < col; y += 1) {
      subCol.push({
        value: 0,
        revealed: false,
        x,
        y,
        flagged: false,
      })
    }
    board.push(subCol)
  }

  // Randomize Bomb Placement
  let bombsCount = 0
  while (bombsCount < bombs) {
    const x = randomNum(0, row - 1)
    const y = randomNum(0, col - 1)

    if (board[x][y].value === 0) {
      board[x][y].value = -1
      mineLocation.push([x, y])
      bombsCount += 1
    }
  }

  // Add Numbers
  for (let roww = 0; roww < row; roww += 1) {
    for (let coll = 0; coll < col; coll += 1) {
      if (board[roww][coll].value === -1) {
        // eslint-disable-next-line no-continue
        continue
      }

      // Top
      if (roww > 0 && board[roww - 1][coll].value === -1) {
        board[roww][coll].value += 1
      }

      // Top Right
      if (
        roww > 0 &&
        coll < col - 1 &&
        board[roww - 1][coll + 1].value === -1
      ) {
        board[roww][coll].value += 1
      }

      // Right
      if (coll < col - 1 && board[roww][coll + 1].value === -1) {
        board[roww][coll].value += 1
      }

      // Bottom Right
      if (
        roww < row - 1 &&
        coll < col - 1 &&
        board[roww + 1][coll + 1].value === -1
      ) {
        board[roww][coll].value += 1
      }

      // Bottom
      if (roww < row - 1 && board[roww + 1][coll].value === -1) {
        board[roww][coll].value += 1
      }

      // Bottom Left
      if (
        roww < row - 1 &&
        coll > 0 &&
        board[roww + 1][coll - 1].value === -1
      ) {
        board[roww][coll].value += 1
      }

      // LEft
      if (coll > 0 && board[roww][coll - 1].value === -1) {
        board[roww][coll].value += 1
      }

      // Top Left
      if (roww > 0 && coll > 0 && board[roww - 1][coll - 1].value === -1) {
        board[roww][coll].value += 1
      }
    }
  }
  return { board, mineLocation }
}

// eslint-disable-next-line default-param-last
const randomNum = (min = 0, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default BoardCreation
