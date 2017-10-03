import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { SudokuService } from './sudoku/sudoku.service';
import { SelectorComponent } from './selector/selector.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, SudokuComponent, SelectorComponent, NavigationComponent],
  imports: [BrowserModule],
  providers: [SudokuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
