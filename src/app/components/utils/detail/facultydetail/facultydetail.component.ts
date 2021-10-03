import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faculty } from 'src/app/classes/faculty';
import { FacultyService } from 'src/app/faculty.service';
@Component({
  selector: 'app-facultydetail',
  templateUrl: './facultydetail.component.html',
  styleUrls: ['./facultydetail.component.css']
})
export class FacultydetailComponent implements OnInit {

  f: faculty | undefined;
  constructor(
    private route : ActivatedRoute,
    private location: Location,
    private facultyservice: FacultyService
  ) { }

  ngOnInit(): void {
    this.getFaculty();
  }
  getFaculty(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.facultyservice.getFaculty(id)
      .subscribe(f => this.f = f);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.f) {
      this.facultyservice.updateFaculty(this.f)
        .subscribe(() => this.goBack());
    }
  }

}
