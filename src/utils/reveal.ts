import { BoardProps } from '../types/board'

const revealed = (
  arr: Array<BoardProps[]>,
  x: number,
  y: number,
  newNonMinesCount: number
) => {
  //   console.log(arr[x][y])

  let mines = newNonMinesCount
  const flipped = []
  flipped.push(arr[x][y])
  while (flipped.length !== 0) {
    const single: any = flipped.pop()

    if (!single.revealed) {
      mines -= 1
      single.revealed = true
    }

    if (single.value !== 0) {
      break
    }

    // Top - Left
    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1])
    }

    // Bottom - Right
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y + 1])
    }

    // Bottom - Left
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y - 1])
    }

    // Top - Right
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y + 1])
    }

    // Single ones

    // Top
    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y])
    }

    // Bottom
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y])
    }

    // Left
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x][single.y - 1])
    }

    // Right
    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x][single.y + 1])
    }

    // ---- Revealing Items ----
    // Top Left Reveal
    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      arr[single.x - 1][single.y - 1].revealed = true
      mines -= 1
    }

    // Left Reveal
    if (single.y > 0 && !arr[single.x][single.y - 1].revealed) {
      arr[single.x][single.y - 1].revealed = true
      mines -= 1
    }

    // Bottom Left Reveal
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      arr[single.x + 1][single.y - 1].revealed = true
      mines -= 1
    }

    // Top Reveal
    if (single.x > 0 && !arr[single.x - 1][single.y].revealed) {
      arr[single.x - 1][single.y].revealed = true
      mines -= 1
    }

    // Bottom Reveal
    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].revealed) {
      arr[single.x + 1][single.y].revealed = true
      mines -= 1
    }

    // Top Right Reveal
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      arr[single.x - 1][single.y + 1].revealed = true
      mines -= 1
    }

    // Right Reveal
    if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].revealed) {
      arr[single.x][single.y + 1].revealed = true
      mines -= 1
    }

    // Bottom Right Reveal
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      arr[single.x + 1][single.y + 1].revealed = true
      mines -= 1
    }
  }

  return { arr, mines }
}

export default revealed
