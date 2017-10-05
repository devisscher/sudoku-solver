import { Injectable } from '@angular/core';
import { Sudoku } from '../models/sudoku';
import { Solution } from '../models/solution';
import { puzzles } from '../data/mock-sudoku';

/**
 * The Sudoku Service
 */
@Injectable()
export class SolverService {
/**
   * Solve sudoku
   * First split the board into 9 arrays, representing each row.
   * Second get empty values to propose possible values in the solvePuzzle function.
   *
   * @param value the index of the puzzle from the puzzles array.
   */
public solveSudoku = (sudoku: Sudoku): Solution => {
    const { data } = sudoku;
    const empties = this.getEmpties(data);
    // console.log(`Sudoku row length is: ${sudoku.length}`);
    // Check that sudoku is an array of 9 rows.
    if (data.length === 9) {
      return this.solvePuzzle(data, empties);
    } else {
      console.log('error');
      // return this.solvePuzzle(sudoku, empties);
    }
  }
/**
   * Receives the board and the empty values.
   * @param board an array of rows
   * @param empties an array of row and col coordinates
   */
private solvePuzzle = (board, empties: Array<Array<number>>): Solution => {
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
      // When the value is not found and the value is below the limit of 9
      while (!found && value <= limit) {
        if (this.checkValue(board, col, row, value)) {
          found = true;
          board[row][col] = value;
          i++;
        } else {
          value++;
        }
      }
      // When the value is not found, backtrack
      if (!found) {
        board[row][col] = 0;
        i--;
      }
    }
    // board.forEach((line) => {
    //     console.log(line.join());
    // });
    console.timeEnd('Solved in');

    // return the solved board
    return board;
  }
/**
   * Responsible for getting empty values inside the board.
   * @param board
   */
private getEmpties = (board: Array<Array<number>>): Array<Array<number>> => {
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
     * @param board the board
     * @param row the row in which the value is
     * @param value candidate
     */
    private checkRow = (board: Array<Array<number>>, row: number, value: number): boolean => {
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === value) {
        return false;
      }
    }
    return true;
  }
/**
   * Responsible checking the candidate within its column.
   * @param board the board
   * @param col the column in which the value is
   * @param value candidate
   */
private checkCol = (board: Array<Array<number>>, col: number, value: number): boolean => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === value) {
        return false;
      }
    }
    return true;
  }
  /**
     * Responsible checking the candidate within its square 3x3.
     * @param board the board
     * @param col the column in which the value is
     * @param row the row in which the value is
     * @param value candidate
     */
private checkSquare = (board: Array<Array<number>>, col: number, row: number, value: number): boolean => {
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
        if (board[i][j] === value) {
          return false;
        }
      }
    }
    return true;
  }
  /**
     * Responsible checking the candidate, it calls the other 3 functions, checkRow, checkCol and checkSquare.
     * @param board the board
     * @param col the column in which the value is
     * @param row the row in which the value is
     * @param value candidate
     */
private checkValue = (board: Array<Array<number>>, col: number, row: number, value: number): boolean => {
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
