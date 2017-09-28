import { Component, OnInit} from '@angular/core';
import { SudokuService } from './sudoku.service';
import { Sudoku } from './sudoku';
import { Solution } from './solution';

@Component({
    selector: 'sudoku-component',
    styleUrls: ['./sudoku.component.css'],
    templateUrl: './sudoku.component.html',
    providers: [SudokuService]
})

export class SudokuComponent implements OnInit {
    title = 'Sudoku Solver';
    sudokus: Sudoku[];
    solution: Solution[];
    selectedSudoku: Sudoku;
    constructor(
        private sudokuService: SudokuService
    ) { }

    getSudokus(): void {
        this.sudokuService.getSudokus().then(sudokus => this.sudokus = sudokus);
      };

    onSelect(sudoku: Sudoku): void {
        console.log(sudoku);
        const sudoku_data = sudoku.data;
        // sudoku_data.forEach(function(element){
        //     console.log(element);
        // });
        this.selectedSudoku = sudoku;
    };
    solveSudoku(sudoku: Sudoku): void {
        console.log('Solving Sudoku');
        console.log(this.sudokuService.solveSudoku(sudoku.data));
    };
    ngOnInit(): void {
        this.getSudokus();
    };
    trackByFn(index, tile) {
        return tile.id;
    }

}

