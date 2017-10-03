import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { SudokuComponent } from './sudoku.component';
import { SudokuService } from './sudoku.service';
import { Sudoku } from '../models/sudoku';
import { puzzles } from '../data/mock-sudoku';

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
describe('SudokuComponent', () => {
  beforeEach(() => {
    // Stub SudokuService for testing purposes

    TestBed.configureTestingModule({
      declarations: [AppComponent, SudokuComponent],
      // providers: [SudokuService] // Use a stub instead
      providers: [{ provide: SudokuService, useValue: sudokuServiceStub }]
    });
    TestBed.compileComponents();

    const fixture = TestBed.createComponent(SudokuComponent);
    const component = fixture.componentInstance;

    const sudokuService = TestBed.get(SudokuService);
  });

  // it('stub object and injected SudokuService should not be the same', () => {
  //   expect(sudokuServiceStub === SudokuService).toBe(false);

  //   // Changing the stub object has no effect on the injected service
  //   sudokuServiceStub.id = 1;
  //   expect(SudokuService).toBe(true);
  // });

  it(
    'should solve the puzzle',
    async(() => {
      const fixture = TestBed.createComponent(SudokuComponent);
      const component = fixture.componentInstance;
      const samplePuzzle: Sudoku = puzzles[0];

      const result = component.solveSudoku();

      // expect(result.length).toBe(9);
      // expect(mockSudokuService.solveSudoku).toHaveBeenCalledWith(samplePuzzle);

      // expect(mockSudokuService.solveSudoku).not.toThrow();
    })
  );
});
