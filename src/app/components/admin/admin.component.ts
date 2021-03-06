import { Component, OnInit } from '@angular/core';
import { faculty } from 'src/app/classes/faculty';
import { FacultyService } from 'src/app/faculty.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  faculties: faculty[] =[];
  constructor(private facultyService : FacultyService) { }

  ngOnInit(): void {
    this.getFaculties();
    sessionStorage.setItem('hello','world');
    //document.body.contentEditable='true';
  }
  getFaculties():void {
    this.facultyService.getFaculties()
    .subscribe(faculties => this.faculties = faculties);
  }
  delete(f : faculty): void {
    this.faculties =this.faculties.filter(h => h !== f);
    this.facultyService.deleteFaculty(f.id).subscribe();
  }
  onEdit()
  {
    document.body.contentEditable='true';
  }
  onStopEdit()
  {
    document.body.contentEditable='false';
  }
}
