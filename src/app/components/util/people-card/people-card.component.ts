import { Component, OnInit,Input } from '@angular/core';
import { faculty } from 'src/app/classes/faculty';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {
  @Input() f : faculty;
  constructor() { }
  ngOnInit(): void {
  }

}
