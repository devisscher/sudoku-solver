import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Sudoku } from './sudoku';
import { Solution } from './solution';

@Injectable()
export class SudokuService {
    private sudokuUrl = 'api/sudokus';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

    getSudokus(): Promise<Sudoku[]> {
        return this.http.get(this.sudokuUrl)
                .toPromise()
                .then(response => response.json().data as Sudoku[])
                .catch(this.handleError);
    }
    getSudoku(id: number): Promise<Sudoku> {
        const url = `${this.sudokuUrl}/${id}`;
        return this.http.get(url)
                .toPromise()
                .then(response => {
                    response.json().data as Sudoku;
                })
                .catch(this.handleError);
    }


    // solveSudoku(sudoku) {
    //     return this.solvePuzzle(this.parseBoard(sudoku), this.getEmpties(sudoku));
    // };

    async solveSudoku(sudoku) {
        try {
            const board = await this.parseBoard(sudoku);
            // const empties = await this.getEmpties(sudoku);
            const empties = [
                [3, 0], [8, 0], [9, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0],
                [20, 0], [21, 0], [22, 0], [23, 0], [26, 0], [27, 0], [30, 0], [34, 0], [35, 0], [36, 0],
                [40, 0], [44, 0], [45, 0], [46, 0], [50, 0], [53, 0], [54, 0], [57, 0], [58, 0], [59, 0],
                [60, 0], [63, 0], [64, 0], [65, 0], [66, 0], [67, 0], [68, 0], [69, 0], [71, 0], [72, 0], [77, 0]
            ];
            return await this.solvePuzzle(board, empties);

        } catch (err) {

        }
    }

    async solvePuzzle(sudoku, empties) {
        console.log('Starting');

        let limit = 9, i, row, col, value, found;

        for (i = 0; i < sudoku.length; i++) {
            console.log('In first loop');
            for (let j = 0; j < sudoku[i].length; j++) {
                console.log('In second loop ');
                row = empties[i][0];
                col = empties[i][1];
                value = sudoku[row][col] + 1;
                found = false;
                while (!found && value <= limit) {
                    console.log('not found');
                    if (this.checkValue(sudoku, col, row, value)) {
                        found = true;
                        sudoku[row][col] = value;
                        i++;
                    } else {
                        value ++;
                    }
                }
                if (!found) {
                    sudoku[row][col] = 0;
                    i--;
                }
            }
            sudoku.forEach((row) => {
                console.log(row.join());
            });
            return await sudoku;
        }
    }
    parseBoard = (sudoku) => {
        const board = [];
        while (sudoku.length) {
            const row = sudoku.splice(0, 9);
            board.push(row);
        }
        return board;
    }
    getEmpties(board) {
        const empties = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
              // If a zero is found, save that position
              if (board[i][j] === 0) {
                empties.push([i, j]);
              }
            }
          }
        console.log(`empties: ${Array.from(new Set(empties))}`);
        return Array.from(new Set(empties));
    }
    checkRow = (sudoku, row, value) => {
        sudoku.forEach(function(element, i) {
            if (sudoku[row][i] === value) {
                return false;
            }
        });
        return true;
    }
    checkCol = (sudoku, col, value) => {
        sudoku.forEach(function(element, i) {
            if (sudoku[i][col] === value) {
                return false;
            }
        });
        return true;
    }

    checkSquare =  (sudoku, col, row, value) =>  {
        let colCorner = 0, rowCorner = 0, squareSize = 3;
        while (col >= colCorner + squareSize) {
            colCorner += squareSize;
        }
        while (row >= colCorner + squareSize) {
            rowCorner += squareSize;
        }
        for (let i = rowCorner; i < rowCorner; i++) {
            for (let j = colCorner; j < colCorner + squareSize; j++) {
                if (sudoku[i][j] === value) {
                    return false;
                }
            }
        }
        return true;
    }
    checkValue = (board, col, row, value) => {
        if (this.checkRow(board, row, value) && this.checkCol(board, col, value) && this.checkSquare(board, col, row, value)) {
            return true;
        } else {
            return false;
        }
    }
}
;