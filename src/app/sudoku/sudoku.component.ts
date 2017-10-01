import { Component, OnInit } from '@angular/core';
import { SudokuService } from './sudoku.service';
import { Sudoku } from './sudoku';
import { Parsed } from './parsed';
import { Solution } from './solution';
import { SUDOKUS } from './mock-sudoku';

@Component({
    selector: 'sudoku-component',
    styleUrls: ['./sudoku.component.css'],
    templateUrl: './sudoku.component.html',
    providers: [SudokuService]
})

export class SudokuComponent implements OnInit {
    title = 'Sudoku Solver';
    // sudokus: Sudoku[];
    parsed: Parsed[];
    solution: Solution[];
    selectedSudoku: Sudoku;

    constructor(
        private sudokuService: SudokuService
    ) { }

    // getSudokus(): void {
    //     this.sudokuService.getSudokus().then(sudokus => this.sudokus = sudokus);
    //   };
    onSelect(sudoku: Sudoku): void {
        // const the_sudoku = this.sudokuService.parseBoard(sudoku.data);

        this.selectedSudoku = sudoku;
        // this.parsed = the_sudoku;
    };
    solveSudoku(sudoku: Sudoku): void {
        console.log(sudoku);
        const solution = this.sudokuService.solveSudoku(sudoku.data);
        this.selectedSudoku = sudoku;

        this.solution = solution;

    };
    ngOnInit(): void {
        // this.getSudokus();
        this.selectedSudoku = SUDOKUS[0];
        // this.sudokuService.getSudoku(1)
        // .then(sudoku => {
        //     this.selectedSudoku = sudoku;
        //     // this.parsed = this.sudokuService.parseBoard(sudoku.data);
        //     // console.log(this.parsed);
        // });



    };
    trackByFn(index, tile) {
        return tile.id;
    }

}

