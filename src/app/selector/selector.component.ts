import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { puzzles } from '../data/mock-sudoku';
import { Sudoku } from '../models/sudoku';

@Component({
  selector: 'selector-component',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  // Mark the field as an input property
  @Input() selectedSudoku: number;

  @Output() change = new EventEmitter();

  puzzles: Sudoku[];

  constructor() {}

  onSelect() {
    this.change.emit(this.selectedSudoku);
  }
  ngOnInit() {
    this.puzzles = puzzles;
  }
}
