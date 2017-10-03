import { Component } from '@angular/core';
import { Sudoku } from './models/sudoku';
/**
 * The app root
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Display title
   */


  selectedSudoku = {
    id: 1
  };

  onSelectSudoku(eventArgs: number) {
    console.log('CHANGE OCCURED ' + eventArgs);
  }
  onClickSolve(eventArgs: number) {
    console.log('CLICKED' + eventArgs);
  }
}
