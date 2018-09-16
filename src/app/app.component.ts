import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Student } from "./student";
import { STUDENTS } from "./mock-student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student = new FormControl();
  filteredStudent: Observable<Student[]>;

  students = STUDENTS

  constructor() {
    this.filteredStudent = this.student.valueChanges
      .pipe(
        startWith(''),
        map(student => student ? this._filterStudent(student) : this.students.slice())
      );
  }

  private _filterStudent(value: string): Student[] {
    const filterValue = value.toLowerCase();

    return this.students.filter(student => student.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    
  }

  
}




