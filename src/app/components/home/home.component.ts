import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutdata ='<p>helloworld</p><br><p>world</p>';
  constructor() { }
  ngOnInit(): void {
  }

}
