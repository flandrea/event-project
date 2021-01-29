import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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



@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  public lists: EventList[] = [];
  url = "https://app.ticketmaster.com/discovery/v2/events.json";
  apiKey = "vGvn53C4TYR52idXEVgtEtqt5eg5AeSz";
  events : any [] = [];
  //favorites: Event[] = [];

<<<<<<< HEAD
  constructor(private http: HttpClient, private router:Router) { }
=======
  constructor(private http: HttpClient, public router: Router) { }
>>>>>>> 82f6d419e9845c5bc42a6c4d38152ee8d34c3ed4


  getEvents(filterName: string, filterLocation:string, filterDate: string, ) {
    const requestUrl = this.getUrlWithAPIKey() + "&keyword=" + filterName //+ "&postalCode=" + filterLocation + "&startDateTime" + filterDate;
    this.router.navigate(['/event-list']);
    this.http.get(requestUrl).subscribe(
      
      (response: any) => {
        this.events = response._embedded.events;
        console.log("eventsArray", this.events);
        for (let list of this.events) {
          const eventResponse: EventList = {
            url: list.url,
            name: list.name,
            images: list.images[0].url,
            //priceMin: list.priceRanges.min,
            //priceMax: list.priceRanges.max,
            localDate: list.dates.start.localDate,
            localTime: list.dates.start.localTime,
            city: list._embedded.venues[0].city.name,
            state: list._embedded.venues[0].state.name,
          };
          this.lists = [...this.lists, eventResponse];
          // this.lists.push(eventResponse);
          // console.log(eventResponse);
        }
<<<<<<< HEAD
=======
        console.log(this.lists);
>>>>>>> 82f6d419e9845c5bc42a6c4d38152ee8d34c3ed4
      
      },
      (error) => {
        console.error(error);
      }
      
    );
  }
  getUrlWithAPIKey() {
    return `${this.url}?apikey=${this.apiKey}`;
  }
}
