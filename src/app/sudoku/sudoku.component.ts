import { Component, OnInit} from '@angular/core';
import { SudokuService } from './sudoku.service';
import { Sudoku } from './sudoku';

@Component({
    selector: 'sudoku-component',
    styleUrls: ['./sudoku.component.css'],
    templateUrl: './sudoku.component.html'
})

export class SudokuComponent implements OnInit {
    title = 'Sudoku Solver';
    sudokus: Sudoku[];
    selectedSudoku: Sudoku;
    constructor(
        private sudokuService: SudokuService
    ) { }
    getSudokus(): void {
        this.sudokuService.getSudokus().then(sudokus => this.sudokus = sudokus);
      };
    onSelect(sudoku: Sudoku): void {
    console.log(sudoku);
    this.selectedSudoku = sudoku;
    };
    ngOnInit(): void {
        this.getSudokus();
      };
}

