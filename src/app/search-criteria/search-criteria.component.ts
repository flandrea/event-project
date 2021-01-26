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
  filterDate: Date 
  

  constructor(public eventService: EventServiceService) { }
 
  ngOnInit(): void {
    this.eventService.getEvents();
  }

}
