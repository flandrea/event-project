import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  url = "https://app.ticketmaster.com/discovery/v2/events.json";
  apiKey = "vGvn53C4TYR52idXEVgtEtqt5eg5AeSz";
  events : any [] = [];

  constructor(private http: HttpClient) { }
  //filterDate: string = "";
  //filterLocation: string = "";
  //filterName: string = "";

  getEvents(filterName: string) {
    const requestUrl = this.getUrlWithAPIKey() + "&keyword=" + filterName + "&";
    this.http.get(requestUrl).subscribe(
      (response: any) => {
        this.events = response._embedded.events;
        console.log(this.events);
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