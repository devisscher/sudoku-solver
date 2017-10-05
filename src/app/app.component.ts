import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sudoku } from './models/sudoku';

import { NavigationComponent } from './navigation/navigation.component';
import { SelectorComponent } from './selector/selector.component';

import { SolverService } from './services/solver.service';

/**
 * Provide an empty solution to the app to display grid.
 */
const emptySolution: Sudoku = {
  id: 3,
  name: 'Empty grid',
  data: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

/**
 * The app root
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {

  /**
   * The selected puzzle.
   */
  selectedSudoku: Sudoku;
  /**
   * The solution is initially set to empty.
   */
  solution: Sudoku = emptySolution;
  /**
   * Solver Service as a dependency
   * @param solverService
   */
  constructor(private solverService: SolverService) {}
  /**
   * Select puzzle to be solved
   * @param sudoku
   */
  onSelect = (sudoku: Sudoku) => {
    this.solution = emptySolution;
    if (sudoku.data.length === 9) {
      this.selectedSudoku = sudoku;
    } else {
      console.log('Error, invalid sudoku.');
      this.selectedSudoku = emptySolution;
    }

  }
  /**
   * Call the solverService solveSudoku method.
   */
  solve = (): void => {
    if (this.selectedSudoku !== emptySolution) {
      this.solution = JSON.parse(JSON.stringify(this.selectedSudoku));
      this.solverService.solveSudoku(this.solution);
    } else {
      console.log('Error, invalid sudoku.');
      this.solution = emptySolution;
    }

  }
}
