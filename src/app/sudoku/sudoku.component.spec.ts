import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { SudokuComponent } from './sudoku.component';
import { SudokuService } from './sudoku.service';


describe('SudokuComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
            AppComponent,
            SudokuComponent,
        ],
        providers: [
          SudokuService
        ]
      });
      TestBed.compileComponents();
    });
    it('should create the sudoku component', async(() => {
      const fixture = TestBed.createComponent(SudokuComponent);
      const sudoku = fixture.debugElement.componentInstance;
      expect(sudoku).toBeTruthy();
    }));

    it(`should have as title 'Sudoku Solver'`, async(() => {
      const fixture = TestBed.createComponent(SudokuComponent);
      const sudoku = fixture.debugElement.componentInstance;
      expect(sudoku.title).toEqual('Sudoku Solver');
    }));

    it('should render title in a h2 tag', async(() => {
      const fixture = TestBed.createComponent(SudokuComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Sudoku Solver');
    }));
  });