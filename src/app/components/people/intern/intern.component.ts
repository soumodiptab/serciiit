import { Component, OnInit } from '@angular/core';
import { Projectinterns } from 'src/app/data/student-data';
@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {
  pinterns=Projectinterns;
  constructor() { }

  ngOnInit(): void {
  }

}
