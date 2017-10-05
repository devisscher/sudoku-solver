/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GridComponent } from './grid/grid.component';
import { SelectorComponent } from './selector/selector.component';
import { SolverService } from './services/solver.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, GridComponent, NavigationComponent, SelectorComponent],
      providers: [SolverService]
    });
    TestBed.compileComponents();
  });
});
