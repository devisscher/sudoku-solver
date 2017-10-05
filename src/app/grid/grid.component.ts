import { Component, Input } from '@angular/core';
import { Sudoku } from '../models/sudoku';
/**
 * Component responsible for rendering the grid.
 */
@Component({
  selector: 'grid-component',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],

})
export class GridComponent {
/**
 * Receives the selectedSudoku.
 */
  @Input() selectedSudoku: Sudoku;

}
