import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { faculty } from './classes/faculty';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const faculties = [
      {id:11,name:"Raghu Reddy",title:"Associate Professor & Head",research:["Model Driven Development","Software Requirements and Architecture","Verification & Validation","Usability and Software engineering education"],imgsrc:"https://serc.iiit.ac.in/static/images/people/6.jpg"},
      {id:12,name:"Venkatesh Choppella",title:"Associate Professor",research:["as","bs"],imgsrc:"https://serc.iiit.ac.in/static/images/people/Venkatesh_Choppella.jpg"},
      {id:13,name:"Vasudeva Varma",title:"Professor & Dean (Research)",research:["as","bs"],imgsrc:"https://serc.iiit.ac.in/static/images/people/DSC_0320.jpg"},
      {id:14,name:"Ramesh Loganathan",title:"PROFESSOR CO-INNOVATION",research:["as","bs"],imgsrc:"https://serc.iiit.ac.in/static/images/people/Ramesh.jpg"}
    ];
    return {faculties};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(faculties: faculty[]): number {
    return faculties.length > 0 ? Math.max(...faculties.map(f => f.id)) + 1 : 11;
  }
}
