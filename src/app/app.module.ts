import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { SudokuService } from './sudoku/sudoku.service';


@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [SudokuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
