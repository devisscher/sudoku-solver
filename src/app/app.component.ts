import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sudoku } from './models/sudoku';

import { NavigationComponent } from './navigation/navigation.component';
// import { SudokuComponent } from './sudoku/sudoku.component';
import { SelectorComponent } from './selector/selector.component';

import { SudokuService } from './sudoku/sudoku.service';

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
  solution: Sudoku;
  /**
   * Set selected initial selected sudoku.
   */

  /**
   * Sudoku Service as a dependency
   * @param sudokuService
   */
  constructor(private sudokuService: SudokuService) {}
  /**
   * Select puzzle to be solved
   * @param sudoku
   */
  onSelect = (sudoku: Sudoku) => {
    this.solution = null;
    this.selectedSudoku = sudoku;
  }
  solve = (): void => {
    this.solution = JSON.parse(JSON.stringify(this.selectedSudoku));
    this.sudokuService.solveSudoku(this.solution);
  }
}
