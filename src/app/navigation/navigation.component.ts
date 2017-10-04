import { Component, OnInit } from '@angular/core';

/**
 * The navigation component. Serves as the header/navigation bar.
 */
@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  /**
   * Title of the app.
   */
  title = 'Sudoku App';
  /**
   * constructor if dependencies.
   */
  constructor() { }
  /**
   * Initialize view, lifecycle hook.
   */
  ngOnInit() {

  }

}
