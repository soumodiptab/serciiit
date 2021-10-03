import { Component, OnInit } from '@angular/core';
import { PPhdstudents,FPhdstudents,GPhdstudents } from 'src/app/data/student-data';
@Component({
  selector: 'app-phd',
  templateUrl: './phd.component.html',
  styleUrls: ['./phd.component.css']
})
export class PhdComponent implements OnInit {
  pstudents = PPhdstudents;
  fstudents = FPhdstudents;
  constructor() { }

  ngOnInit(): void {
  }

}
