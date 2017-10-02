import { Component, OnInit } from "@angular/core";
import { SudokuService } from "./sudoku.service";
import { Sudoku } from "./sudoku";
import { Parsed } from "./parsed";
import { Solution } from "./solution";
import { SUDOKUS } from "./mock-sudoku";

@Component({
  selector: "sudoku-component",
  styleUrls: ["./sudoku.component.css"],
  templateUrl: "./sudoku.component.html",
  providers: [SudokuService]
})
export class SudokuComponent implements OnInit {
  title = "Sudoku Solver";
  parsed: Parsed[];
  solution: Solution;
  selectedSudoku: Sudoku;

  constructor(private sudokuService: SudokuService) {}

  solveSudoku(sudoku: Sudoku): void {
    console.log(sudoku);
    const solution = this.sudokuService.solveSudoku(sudoku.data);
    this.selectedSudoku = sudoku;
    this.solution = solution;
  }
  ngOnInit(): void {
    this.selectedSudoku = SUDOKUS[0];
  }
}
