import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sudoku } from './models/sudoku';

import { NavigationComponent } from './navigation/navigation.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { SelectorComponent } from './selector/selector.component';

import { SudokuService } from './sudoku/sudoku.service';

/**
 * The app root
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SudokuComponent]
})
export class AppComponent implements OnInit {

  /**
   * Outputs the selected puzzle.
   */
  @Output() select: EventEmitter<number>= new EventEmitter();
  /**
   * Set selected initial selected sudoku.
   */
  selectedSudoku = 0;

  /**
   * Sudoku Service as a dependency
   * @param sudokuService
   */
  constructor(private sudokuService: SudokuService) {}
  /**
   * Select puzzle to be solved
   * @param value
   */
  onSelect(value: number) {
    console.log('CLICKED ' + value);
    this.selectedSudoku = value;
    this.select.emit(value);
  }
  /**
   * Initialize view and emit selectedSudoku to Sudoku component.
   */
  ngOnInit() {
    this.select.emit(this.selectedSudoku);
  }
}
