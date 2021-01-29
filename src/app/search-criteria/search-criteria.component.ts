import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { EventListComponent } from '../event-list/event-list.component';
=======
import { Router } from '@angular/router';
>>>>>>> 82f6d419e9845c5bc42a6c4d38152ee8d34c3ed4
=======
import { Router } from '@angular/router';
>>>>>>> 82f6d419e9845c5bc42a6c4d38152ee8d34c3ed4
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers: [EventServiceService]
})
export class SearchCriteriaComponent implements OnInit {
  
  filterName: string = '';
  filterLocation: string = '';
  filterDate: string = '';
  

  constructor(public eventService: EventServiceService, public router: Router) { }
 
  ngOnInit(): void {
    //this.eventService.getEvents(this.filterName);
  }
  gitFilteredResults() :void {
    console.log(this.filterName);
    // console.log(this.filterDate);
    this.eventService.getEvents(this.filterName, this.filterLocation, this.filterDate)
    
  }

}
