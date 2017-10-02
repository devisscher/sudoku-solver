import { Injectable } from "@angular/core";
import { Headers, Http, HttpModule } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Sudoku } from "./sudoku";
import { Solution } from "./solution";
import { SUDOKUS } from "./mock-sudoku";

@Injectable()
export class SudokuService {
  // /**
  //  * Retrieve puzzles from SUDOKUS
  //  */
  // getSudokus(): Promise<Sudoku[]> {
  //     return Promise.resolve(SUDOKUS);
  // }
  // /**
  //  * Retrieve a single puzzle by id
  //  * @param id the id of the puzzle
  //  */
  // getSudoku(id: number): Promise<Sudoku> {
  //     return this.getSudokus().then(sudokus => sudokus.find(sudoku => sudoku.id === id));
  // }
  /**
     * Solve sudoku
     * First split the board into 9 arrays, representing each row.
     * Second get empty values to propose possible values in the solvePuzzle function.
     * 
     * @param sudoku the entire board as a 1 dimensional array.
     */
  solveSudoku = (sudoku): Solution => {
    // const board = this.parseBoard(sudoku);
    const empties = this.getEmpties(sudoku);
    // return this.getEmpties(board);
    const solution = this.solvePuzzle(sudoku, empties);
    return solution;
  };
  /**
     * Receives the board and the empty values.
     * @param {array} board
     * @param empties
     */
  solvePuzzle = (board, empties): Solution => {
    console.log(board);
    let limit = 9,
      i,
      row,
      col,
      value,
      found;

    for (i = 0; i < empties.length; ) {
      row = empties[i][0];
      col = empties[i][1];
      value = board[row][col] + 1;
      found = false;
      while (!found && value <= limit) {
        if (this.checkValue(board, col, row, value)) {
          found = true;
          board[row][col] = value;
          i++;
        } else {
          value++;
        }
      }
      if (!found) {
        board[row][col] = 0;
        i--;
      }
    }
    // board.forEach((line) => {
    //     console.log(line.join());
    // });
    return board;
  };
  /**
     * Responsible for getting empty values inside the board.
     * @param {array} sudoku
     */
  getEmpties = board => {
    const empties = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          empties.push([i, j]);
        }
      }
    }
    return empties;
  };
  /**
     * Responsible checking the candidate within its row.
     * @param {array} sudoku the board
     * @param {number} row the row in which the value is
     * @param {value} value candidate
     */
  checkRow = (sudoku, row, value) => {
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[row][i] === value) {
        return false;
      }
    }
    return true;
  };

  checkCol = (sudoku, col, value) => {
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[i][col] === value) {
        return false;
      }
    }
    return true;
  };

  checkSquare = (sudoku, col, row, value) => {
    let colCorner = 0,
      rowCorner = 0,
      squareSize = 3;
    while (col >= colCorner + squareSize) {
      colCorner += squareSize;
    }
    while (row >= rowCorner + squareSize) {
      rowCorner += squareSize;
    }
    for (let i = rowCorner; i < rowCorner + squareSize; i++) {
      for (let j = colCorner; j < colCorner + squareSize; j++) {
        if (sudoku[i][j] === value) {
          return false;
        }
      }
    }
    return true;
  };

  checkValue = (board, col, row, value) => {
    if (
      this.checkRow(board, row, value) &&
      this.checkCol(board, col, value) &&
      this.checkSquare(board, col, row, value)
    ) {
      return true;
    } else {
      return false;
    }
  };
}
