import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SudokuService } from './sudoku.service';
import { Sudoku } from '../models/sudoku';
import { Parsed } from '../models/parsed';
import { Solution } from '../models/solution';
import { puzzles } from '../data/mock-sudoku';

@Component({
  selector: 'sudoku-component',
  styleUrls: ['./sudoku.component.scss'],
  templateUrl: './sudoku.component.html',
  providers: [SudokuService]
})
export class SudokuComponent implements OnInit {
  @Input() solveSudokuButton: Sudoku;
  @Output() solve = new EventEmitter();

  title = 'Sudoku Solver';
  selectedSudoku: Sudoku;
  solution: Solution;

  constructor(private sudokuService: SudokuService) {}


  // get sudoku based on selected value


  onClickSolve() {
    console.log(this.selectedSudoku);
    this.solve.emit();
  }
  solveSudoku(): Solution {
    this.solution = this.sudokuService.solveSudoku(puzzles[0].data);
    return this.solution;
  }
  ngOnInit(): void {
    const original: Sudoku = puzzles[0];
    this.selectedSudoku = original;
    // get the last puzzle in the array of puzzles to allow extra puzzles to be added
    this.solution = puzzles.slice(-1)[0];
  }
}
