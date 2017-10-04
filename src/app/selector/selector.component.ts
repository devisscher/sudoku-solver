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
  @Input() selectedSudoku: Sudoku;
  /**
   * puzzles property, provides options to the dropdown list.
   */
  puzzles: Sudoku[];
  /**
   * constructor if dependencies.
   */
  constructor() {}
  /**
   * set puzzles in dropdown list.
   */
  ngOnInit() {
    this.puzzles = puzzles;
  }
}
