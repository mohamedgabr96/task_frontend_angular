import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getWeatherData(location: string): Observable<any> {
    return this.http.get(`${this.apiURL}/forecast.json`, {
      params: {
        key: environment.apiKey,
        q: `${location}`
      }
    })
  }
}
