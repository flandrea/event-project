import { Component, OnInit } from '@angular/core';
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
  

  constructor(public eventService: EventServiceService) { }
 
  ngOnInit(): void {
    //this.eventService.getEvents(this.filterName);
  }
  gitFilteredResults() :void {
    //console.log(this.filterName);
    console.log(this.filterDate);
    this.eventService.getEvents(this.filterName, this.filterLocation, this.filterDate)

  }

}
