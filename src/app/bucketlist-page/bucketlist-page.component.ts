import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../event-service.service';




@Component({
  selector: 'app-bucketlist-page',
  templateUrl: './bucketlist-page.component.html',
  styleUrls: ['./bucketlist-page.component.css'],
  providers: [],
})

export class BucketlistPageComponent implements OnInit {
  
  constructor(public eventService: EventServiceService) { }
  

  ngOnInit(): void {
    
  }
  removeFavorite(index) {
    this.eventService.favorites.splice(index, 1);
  }


}