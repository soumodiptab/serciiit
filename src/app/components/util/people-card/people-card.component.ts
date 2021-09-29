import { Component, OnInit,Input } from '@angular/core';
import { faculty } from 'src/app/classes/faculty';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {
  imgsrc:string ="https://serc.iiit.ac.in/static/images/people/6.jpg";
  @Input() f : faculty;
  constructor() { }
  ngOnInit(): void {
  }

}
