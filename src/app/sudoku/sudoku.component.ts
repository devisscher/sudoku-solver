import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SudokuService } from './sudoku.service';
import { Sudoku } from '../models/sudoku';
import { Solution } from '../models/solution';
import { puzzles } from '../data/mock-sudoku';

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
 * The Sudoku component
 */
@Component({
  selector: 'sudoku-component',
  styleUrls: ['./sudoku.component.scss'],
  templateUrl: './sudoku.component.html',
  providers: [SudokuService]
})
export class SudokuComponent implements OnInit, OnChanges {
  /**
   * Input property for the selected puzzle.
   */
  @Input() selectedSudoku: number;
  /**
   * Sudoku type definition
   */
  sudoku: Sudoku;
  /**
   * Solution type definition
   */
  solution: Sudoku = null;
  /**
   * emptySolution definition is the same as Sudoku
   */
  emptySolution: Sudoku = emptySolution;
  /**
   * isEmpty is used for styling the grid. Adds a class binding to the grid cells.
   */
  isEmpty = true;
  /**
   * Sudoku Service as a dependency
   * @param sudokuService
   */
  constructor(private sudokuService: SudokuService) {}
  /**
   * When solve button is pressed, takes the input property and solves the puzzle.
   */
  // solve(): void {
  //   this.isEmpty = false; // remove the empty class from grid
  //   this.emptySolution = null; // Set emptySolution to null
  //   // this.sudoku = this.sudokuService.getSudoku(this.selectedSudoku); // Set original puzzle
  //   this.solution = this.sudokuService.solveSudoku(this.selectedSudoku); // Set solution to solveSudoku in SudokuService
  // }
  /**
   * Receives changes from the select puzzle dropdown.
   */
  ngOnChanges(): void {
    this.sudoku = this.sudokuService.getSudoku(this.selectedSudoku); // bind the selected sudoku
    this.solution = null; // on select remove previous solution if any
    this.emptySolution = emptySolution; // add the empty grid
    this.isEmpty = true; // bind the empty class to the sudoku-cell

  }
  /**
   * Initializes the view with the selectedSudoku emitted from the app component.
   * Fills an empty grid for display purpose.
   */
  ngOnInit(): void {
    this.sudoku = this.sudokuService.getSudoku(this.selectedSudoku);
  }
}
