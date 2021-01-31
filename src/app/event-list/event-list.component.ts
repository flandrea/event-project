import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';

interface EventList {
  url: string;
  name: string;
  images: string;
  //priceMin: number;
  //priceMax: number;
  localDate: string;
  localTime: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: []
})
export class EventListComponent implements OnInit {
  
  
  constructor(public eventService: EventServiceService, public router: Router) { }
  
 

  ngOnInit(): void {
    
  }
  
  
saveFavorites(evt: EventList) : void {
  this.eventService.favorites.push(evt);
}

public showInfo = false;
toggleInfo(){
  this.showInfo = !this.showInfo;
  console.log("works");
}

}