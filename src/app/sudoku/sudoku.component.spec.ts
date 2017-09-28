import { TestBed, async } from '@angular/core/testing';
import { SudokuComponent } from './sudoku.component';


describe('SudokuComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
            SudokuComponent
        ],
      });
      TestBed.compileComponents();
    });

    it('should render title in a h2 tag', async(() => {
      const fixture = TestBed.createComponent(SudokuComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Sudoku Solver');
    }));
  });