import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Sudoku } from '../models/sudoku';
import { Solution } from '../models/solution';
import { puzzles } from '../data/mock-sudoku';

@Injectable()
export class SudokuService {
  /**
     * Solve sudoku
     * First split the board into 9 arrays, representing each row.
     * Second get empty values to propose possible values in the solvePuzzle function.
     *
     * @param sudoku the entire board as a 1 dimensional array.
     */
  solveSudoku = (sudoku: Array<number>): Solution => {
    const empties = this.getEmpties(sudoku);
    console.log(`Sudoku row length is: ${sudoku.length}`);
    // Check that sudoku is an array of 9 rows.
    if (sudoku.length === 9) {
      return this.solvePuzzle(sudoku, empties);
    } else {
      console.log('error');
      return this.solvePuzzle(sudoku, empties);
    }
  }
  /**
     * Receives the board and the empty values.
     * @param board
     * @param empties
     */
  solvePuzzle = (board, empties: Array<Array<number>>): Solution => {
    console.time('Solved in');
    // console.log(board);
    let limit = 9,
      i,
      row,
      col,
      value,
      found;

    for (i = 0; i < empties.length; ) {
      // empties i = the empty value array found
      // empties [i][0] = first value of the array
      row = empties[i][0]; // row number
      col = empties[i][1]; // col number
      value = board[row][col] + 1; // the value = the row

      // To see backtracking (Slows down the app considerably)
      // console.log(`row and col = row: ${row} col: ${col}`);
      // console.log(value);

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
    console.timeEnd('Solved in');
    return board;
  }
  /**
     * Responsible for getting empty values inside the board.
     * @param {array} sudoku
     */
  getEmpties = board => {
    const empties = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          // pushes an array inside the empties array equal to [row, col]
          empties.push([i, j]);
        }
      }
    }
    return empties;
  }
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
  }

  checkCol = (sudoku, col, value) => {
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[i][col] === value) {
        return false;
      }
    }
    return true;
  }

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
  }

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
  }
}
