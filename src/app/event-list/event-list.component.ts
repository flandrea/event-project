import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventServiceService]
})
export class EventListComponent implements OnInit {

  constructor(public eventService: EventServiceService) { }

  ngOnInit(): void {
    console.log(this.eventService.lists);
  }

}
