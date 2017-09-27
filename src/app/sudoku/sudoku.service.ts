import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Sudoku } from './sudoku';

@Injectable()
export class SudokuService {
    private sudokuUrl = 'api/sudokus';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
    getSudokus(): Promise<Sudoku[]> {
        return this.http.get(this.sudokuUrl)
                    .toPromise()
                    .then(response => response.json().data as Sudoku[])
                    .catch(this.handleError);
    }
    getSudoku(id: number): Promise<Sudoku> {
        const url = `${this.sudokuUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Sudoku)
          .catch(this.handleError);
    }
}
