Simplified version of the Minesweeper game!

Requirements:
1) The game has a N square board and the user can set the size of the board.
2) Set a number of mines. Place exactly that many mines randomly on the board.
3) Given the location of a cell, tell the user if there is a mine in that location.

If there isn’t a mine tell the user how many of the neighbouring cells have mines.

Here is an example of an empty board of size 4:
```
┏━━━┳━━━┳━━━┳━━━┓
┃   ┃   ┃   ┃   ┃
┣━━━╋━━━╋━━━╋━━━┫
┃   ┃   ┃   ┃   ┃
┣━━━╋━━━╋━━━╋━━━┫
┃   ┃   ┃   ┃   ┃
┣━━━╋━━━╋━━━╋━━━┫
┃   ┃   ┃   ┃   ┃
┗━━━┻━━━┻━━━┻━━━┛
```

Here is the same board, with 2 mines, and the output for each location
```
┏━━━┳━━━┳━━━┳━━━┓
┃ 0 ┃ 1 ┃ x ┃ 1 ┃
┣━━━╋━━━╋━━━╋━━━┫
┃ 1 ┃ 2 ┃ 2 ┃ 1 ┃
┣━━━╋━━━╋━━━╋━━━┫
┃ 1 ┃ x ┃ 1 ┃ 0 ┃
┣━━━╋━━━╋━━━╋━━━┫
┃ 1 ┃ 1 ┃ 1 ┃ 0 ┃
┗━━━┻━━━┻━━━┻━━━┛
```
