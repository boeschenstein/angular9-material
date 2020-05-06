import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AstronautService } from '../astronaut.service';
import { Option } from '../types';

@Component({
  selector: 'app-add-astronaut',
  templateUrl: './add-astronaut.component.html',
  styleUrls: ['./add-astronaut.component.scss'],
})
export class AddAstronautComponent {
  astronaut: FormGroup;
  undergraduateMajors: Observable<Option[]>;

  constructor(
    private dialogRef: MatDialogRef<AddAstronautComponent>,
    fb: FormBuilder,
    astronautService: AstronautService
  ) {
    this.astronaut = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleInitial: ['', Validators.maxLength(1)],
      active: [true],
      birthdate: ['', Validators.required],
      undergraduateMajor: ['', Validators.required],
    });
    this.undergraduateMajors = astronautService.filters.pipe(
      map((filters) =>
        filters.find((f) => f.category === 'undergraduateMajor')
      ),
      map((filter) => filter.options)
    );
  }

  saveAstronaut() {
    // Save to backend
    // Display new astronaut
    console.log(this.astronaut.value);
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}
