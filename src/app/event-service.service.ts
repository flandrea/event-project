import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  url = 'https://app.ticketmaster.com/discovery/v2/events.json';
  apiKey = 'vGvn53C4TYR52idXEVgtEtqt5eg5AeSz';
  events: any[] = [];

  constructor(private http: HttpClient) {}
  //filterDate: string = "";
  //filterLocation: string = "";
  //filterName: string = "";

  getEvents(filterName: string) {
    const requestUrl = this.getUrlWithAPIKey() + '&keyword=' + filterName + '&';
    this.http.get(requestUrl).subscribe(
      (response: any) => {
        this.events = response._embedded.events;
        //console.log(this.events);
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
          this.lists.push(eventResponse);
        }
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
