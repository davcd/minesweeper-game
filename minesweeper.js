class MineSweeper {
  static MINE_SYMBOL = '-'
  static SIZE_LIMIT = 50

  constructor (size, mines) {
    if (size > MineSweeper.SIZE_LIMIT || size <= 0) {
      throw new Error('Invalid board size!')
    }

    if (mines > size * size || mines <= 0) {
      throw new Error('Invalid number of mines!')
    }

    this.size = size
    this.mines = mines

    this.#initBoard()
    this.#fillBoard()
  }

  #initBoard () {
    this.board = new Array(this.size).fill(0).map(() => new Array(this.size).fill(0))
  }

  #fillBoard () {
    let mineCount = 0
    while (mineCount < this.mines) {
      const x = MineSweeper.#randomInt(0, this.size - 1)
      const y = MineSweeper.#randomInt(0, this.size - 1)

      if (this.board[x][y] !== MineSweeper.MINE_SYMBOL) {
        this.#setValue(x, y)
        mineCount++
      }
    }
  }

  #setValue (x, y) {
    const variationsX = [x - 1, x, x + 1]
    const variationsY = [y - 1, y, y + 1]

    for (const vx of variationsX) {
      for (const vy of variationsY) {
        if (vx === x && vy === y) {
          this.board[x][y] = MineSweeper.MINE_SYMBOL
        } else if (this.#validCoord(vx) && this.#validCoord(vy) && this.board[vx][vy] !== MineSweeper.MINE_SYMBOL) {
          this.board[vx][vy]++
        }
      }
    }
  }

  static #randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  print () {
    console.table(this.board)
  }

  pressCell (x, y) {
    if (!this.#validCoord(x) || !this.#validCoord(y)) {
      return 'Invalid coordinates!'
    }

    return this.#isMine() ? 'You lost!' : `You have ${this.#getCell()} neighbours`
  }

  #isMine (x, y) {
    return this.board[x][y] === MineSweeper.MINE_SYMBOL
  }

  #getCell (x, y) {
    return this.board[x][y]
  }

  #validCoord (c) {
    return c >= 0 && c < this.size
  }
}

module.exports = MineSweeper

