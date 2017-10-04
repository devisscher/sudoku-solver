/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { SelectorComponent } from './selector/selector.component';
import { SudokuService } from './sudoku/sudoku.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SudokuComponent, NavigationComponent, SelectorComponent],
      providers: [SudokuService]
    });
    TestBed.compileComponents();
  });

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    `should have as title 'Sudoku App'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.selectedSudoku).toEqual(0);
    })
  );
});
