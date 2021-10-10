import { Component, OnInit } from '@angular/core';
import { DMSstudents,FMSstudents,GMSstudents } from 'src/app/data/student-data';
@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.css']
})
export class MsComponent implements OnInit {
  dstudents = DMSstudents;
  fstudents = FMSstudents;
  gstudents = GMSstudents;
  constructor() { }

  ngOnInit(): void {
  }

}
