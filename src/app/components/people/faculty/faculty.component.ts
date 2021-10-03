import { Component, OnInit } from '@angular/core';
import { faculty } from 'src/app/classes/faculty';
import {DFaculties } from 'src/app/data/faculty-data';
import { FacultyService } from 'src/app/faculty.service';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculties: faculty[]=[];
  dfaculties  = DFaculties;
  constructor(private facultyService: FacultyService) { }
  ngOnInit(): void {
    this.getFaculties();
  }
  getFaculties()
  {
    this.facultyService.getFaculties()
    .subscribe(faculties =>this.faculties = faculties);
  }
}
