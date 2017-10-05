import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { puzzles } from '../data/mock-sudoku';
import { Sudoku } from '../models/sudoku';

/**
 * The selector component. Used to choose different puzzles.
 */
@Component({
  selector: 'selector-component',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  /**
   * selectedSudoku input property.
   */
  @Input() puzzleSelected: any;
  /**
   * puzzles property, provides options to the dropdown list.
   */
  puzzles: Sudoku[];
  /**
   * constructor if dependencies.
   */
  constructor() {}
  /**
   * On select from dropdown list, puzzle is bound to the grid.
   * @param event the event sent from the dropdown
   */
  onChange(event) {
    this.puzzleSelected(puzzles[event.target.value]);
  }
  /**
   * set puzzles in dropdown list. Default to first puzzle.
   */
  ngOnInit() {
    this.puzzleSelected(puzzles[0]);
    this.puzzles = puzzles;
  }
}
