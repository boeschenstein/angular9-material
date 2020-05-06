import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddAstronautComponent } from './add-astronaut/add-astronaut.component';
import { AstronautService } from './astronaut.service';
import { Astronaut, Filter, FilterState, Option } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular9-material';

  astronauts$: Observable<Astronaut[]>;
  filterState: FilterState;
  filters$: Observable<Filter[]>;

  constructor(astronautService: AstronautService, private dialog: MatDialog) {
    this.astronauts$ = astronautService.astronauts;
    this.filterState = astronautService.filterState;
    this.filters$ = astronautService.filters;
  }

  // changeFilter({ category, option }: { category: string; option: Option })
  changeFilter(category: string, option: Option) {
    console.warn(category, option);
    this.filterState[category] = option;
  }

  addAstronaut() {
    this.dialog.open(AddAstronautComponent, {
      width: '500px',
      ariaLabel: 'Add an astronaut',
    });
  }
}
