import { Component, OnInit } from '@angular/core';
import persons from '../../data/publications-data.json'
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publicationData: any;
  singlePersonData : any;
  constructor() {
    this.publicationData=persons.dblppersons;
    this.singlePersonData=this.publicationData[0].dblpperson;
   }
  ngOnInit(): void {
    console.log(this.publicationData[0].dblpperson.person.author);
  }
  change()
  {
    
  }
}
