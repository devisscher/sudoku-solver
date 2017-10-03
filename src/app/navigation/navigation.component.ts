import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  title = 'Sudoku App';
  constructor() { }

  ngOnInit() {

  }

}
