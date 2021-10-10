import { Component, OnInit } from '@angular/core';
import { GBtechstudents,HBtechstudents } from 'src/app/data/student-data';
@Component({
  selector: 'app-btech',
  templateUrl: './btech.component.html',
  styleUrls: ['./btech.component.css']
})
export class BtechComponent implements OnInit {
  gbtechstudents=GBtechstudents;
  hbtechstudents=HBtechstudents;
  constructor() { }

  ngOnInit(): void {
  }

}
