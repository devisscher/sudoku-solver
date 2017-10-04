
import { SudokuService } from './sudoku.service';
import { Sudoku } from '../models/sudoku';

import { puzzles } from '../data/mock-sudoku';


describe('Test service: SudokuService', () => {
    const sudokuServiceStub = {
        sudoku: {
          id: 1,
          name: 'Qlik Sample Puzzle',
          data: [
            [8, 0, 0, 7, 5, 0, 0, 0, 4],
            [0, 0, 0, 1, 0, 0, 0, 0, 0],
            [5, 1, 0, 4, 0, 6, 0, 0, 7],
            [0, 0, 4, 0, 0, 0, 0, 5, 0],
            [1, 0, 5, 0, 0, 0, 7, 0, 8],
            [0, 2, 0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 9, 0, 2, 0, 6, 1],
            [0, 0, 0, 0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 6, 1, 0, 0, 5]
          ]
        }
      };
      const sudokuServiceSolutionStub = {
        sudoku: {
          id: 1,
          name: 'Solution',
          data: [
            [8, 6, 2, 7, 5, 9, 1, 3, 4],
            [3, 4, 7, 1, 2, 8, 5, 9, 6],
            [5, 1, 9, 4, 3, 6, 2, 8, 7],
            [9, 8, 4, 2, 1, 7, 6, 5, 3],
            [1, 3, 5, 6, 9, 4, 7, 2, 8],
            [7, 2, 6, 3, 8, 5, 4, 1, 9],
            [4, 5, 8, 9, 7, 2, 3, 6, 1],
            [6, 9, 1, 5, 4, 3, 8, 7, 2],
            [2, 7, 3, 8, 6, 1, 9, 4, 5]
          ]
        }
      };
let service;
beforeEach(() => {
    service = new SudokuService();
});

  it('Should get sudoku', () => {
    expect(service.getSudoku(0)).toEqual(sudokuServiceStub.sudoku);
  });
  // take a puzzle instead
  it('Should solve sudoku', () => {
    expect(service.solveSudoku(0)).toEqual(sudokuServiceSolutionStub.sudoku.data);
  });
});

