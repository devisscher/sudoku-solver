import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sudoku } from './models/sudoku';

import { NavigationComponent } from './navigation/navigation.component';
import { SelectorComponent } from './selector/selector.component';

import { SolverService } from './services/solver.service';

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
   * Outputs the selected puzzle.
   */
  selectedSudoku: Sudoku;
  solution: Sudoku = emptySolution;
  /**
   * Set selected initial selected sudoku.
   */

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
    this.selectedSudoku = sudoku;
  }
  solve = (): void => {
    this.solution = JSON.parse(JSON.stringify(this.selectedSudoku));
    this.solverService.solveSudoku(this.solution);
  }
}
