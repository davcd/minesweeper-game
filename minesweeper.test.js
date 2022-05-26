const MineSweeper = require('./minesweeper')

describe('Invalid constructor parameters', () => {
  test('Given negative size, when create MineSweeper, should throw error', () => {
    expect(() => new MineSweeper(-1, 4)).toThrowError('Invalid board size!')
  })

  test('Given zero size, when create MineSweeper, should throw error', () => {
    expect(() => new MineSweeper(0, 4)).toThrowError('Invalid board size!')
  })

  test('Given size larger than limit, when create MineSweeper, should throw error', () => {
    expect(() => new MineSweeper(MineSweeper.SIZE_LIMIT + 1, 2)).toThrowError('Invalid board size!')
  })

  test('Given negative mines, when create MineSweeper, should throw error', () => {
    expect(() => new MineSweeper(10, -3)).toThrowError('Invalid number of mines!')
  })

  test('Given more mines than cells, when create MineSweeper, should throw error', () => {
    expect(() => new MineSweeper(2, 9)).toThrowError('Invalid number of mines!')
  })
})

test.each([[10, 10], [5, 2], [20, 100]])(
  'Given valid parameters(%i, %i), when create MineSweeper, board should be initiated and filled.',
  (size, mines) => {
    const minesweeper_board = new MineSweeper(size, mines).board

    expect(minesweeper_board.length).toStrictEqual(size)
    expect(minesweeper_board[0].length).toStrictEqual(size)
    expect(countMines(minesweeper_board)).toStrictEqual(mines)
  }
)

function countMines(board){
  let mines = 0
  for(const row of board){
    for(const cell of row){
      if(cell === MineSweeper.MINE_SYMBOL){
        mines++
      }
    }
  }
  return mines
}
