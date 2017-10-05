
import { SolverService } from './solver.service';
import { Sudoku } from '../models/sudoku';

describe('Test service: SudokuService', () => {
    const solverServiceStub = {
        sudoku: {
          id: 1,
          name: 'Qlik Sample Puzzle',
          data: [
            [8, 5, 6, 0, 1, 4, 7, 3, 0],
            [0, 9, 0, 0, 0, 0, 0, 0, 0],
            [2, 4, 0, 0, 0, 0, 1, 6, 0],
            [0, 6, 2, 0, 5, 9, 3, 0, 0],
            [0, 3, 1, 8, 0, 2, 4, 5, 0],
            [0, 0, 5, 3, 4, 0, 9, 2, 0],
            [0, 2, 4, 0, 0, 0, 0, 7, 3],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 8, 6, 3, 0, 2, 9, 4]
          ]
        }
      };
      const solverServiceSolutionStub = {
        sudoku: {
          id: 1,
          name: 'Solution',
          data: [
            [8, 5, 6, 2, 1, 4, 7, 3, 9],
            [1, 9, 3, 5, 7, 6, 8, 4, 2],
            [2, 4, 7, 9, 8, 3, 1, 6, 5],
            [4, 6, 2, 7, 5, 9, 3, 8, 1],
            [9, 3, 1, 8, 6, 2, 4, 5, 7],
            [7, 8, 5, 3, 4, 1, 9, 2, 6],
            [6, 2, 4, 1, 9, 8, 5, 7, 3],
            [3, 7, 9, 4, 2, 5, 6, 1, 8],
            [5, 1, 8, 6, 3, 7, 2, 9, 4]
          ]
        }
      };
let service;
beforeEach(() => {
    service = new SolverService();
});
  it('Should solve sudoku', () => {
    expect(service.solveSudoku(solverServiceStub.sudoku)).toEqual(solverServiceSolutionStub.sudoku.data);
  });
});

