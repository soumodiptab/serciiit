import { Component, OnInit } from '@angular/core';
import { Faculties } from 'src/app/data/faculty-data';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculties = Faculties;
  constructor() { }
  ngOnInit(): void {
  }

}
