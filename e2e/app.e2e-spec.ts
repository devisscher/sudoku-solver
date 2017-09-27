import { SudokuSolverPage } from './app.po';

describe('sudoku-solver App', function() {
  let page: SudokuSolverPage;

  beforeEach(() => {
    page = new SudokuSolverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
