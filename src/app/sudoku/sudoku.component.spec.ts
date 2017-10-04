import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { SudokuComponent } from './sudoku.component';
import { SudokuService } from './sudoku.service';
import { Sudoku } from '../models/sudoku';
import { Solution } from '../models/solution';
import { puzzles } from '../data/mock-sudoku';


class MockSudokuService extends SudokuService {
  public getSudoku(value: number): Sudoku {
    return {
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
    };
  }
  public solve(): Solution {
    return {
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
    };
  }
}


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

describe('SudokuComponent', () => {
  let component: SudokuComponent;
  let fixture: ComponentFixture<SudokuComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SudokuComponent],
      // providers: [SudokuService] // Use a stub instead
      providers: [{ provide: SudokuService, useValue: MockSudokuService }]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuComponent);
    component = fixture.componentInstance;
  });
  let MockSudokuService;
  beforeEach(() => {
    MockSudokuService = new SudokuService();
  });

  it('Should get initial sudoku', () => {
    expect(MockSudokuService.getSudoku(0)).toEqual(sudokuServiceStub.sudoku);
  });

  // it('Should solve sudoku without using the service.', () => {
  //   expect(MockSudokuService.solve()).toEqual(sudokuServiceSolutionStub.sudoku);
  // });

});



  // it('stub object and injected SudokuService should not be the same', () => {
  //   expect(sudokuServiceStub === SudokuService).toBe(false);

  //   // Changing the stub object has no effect on the injected service
  //   sudokuServiceStub.id = 1;
  //   expect(SudokuService).toBe(true);
  // });

  // it(
  //   'should solve the puzzle',
  //   async(() => {
  //     const fixture = TestBed.createComponent(SudokuComponent);
  //     const component = fixture.componentInstance;
  //     const samplePuzzle: Sudoku = puzzles[0];
  //     const result = component.solveSudoku();
  //     // expect(true).toBe(true);


  //     // expect(mockSudokuService.solveSudoku).toHaveBeenCalledWith(samplePuzzle);

  //     // expect(mockSudokuService.solveSudoku).not.toThrow();
  //   })
  // );
