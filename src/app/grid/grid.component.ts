import { Component, Input } from '@angular/core';
import { Sudoku } from '../models/sudoku';

@Component({
  selector: 'grid-component',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],

})
export class GridComponent {

  @Input() selectedSudoku: Sudoku;

}
