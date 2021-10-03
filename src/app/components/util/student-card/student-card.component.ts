import { Component, OnInit,Input } from '@angular/core';
import { student } from 'src/app/classes/student';
@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() s : student;
  constructor() { }

  ngOnInit(): void {
  }

}
