
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolverService } from './services/solver.service';
import { SelectorComponent } from './selector/selector.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [AppComponent, SelectorComponent, NavigationComponent, GridComponent],
  imports: [BrowserModule],
  providers: [SolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
