import {Component, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { WeatherApiService} from "./services/weather-api.service";
import {SidenavComponent} from "./sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  location = signal<string>('cairo');
  current!: {};
  forecast!: {};


  constructor(private weatherApiService: WeatherApiService) {
    effect(() => {
      this.weatherApiService.getWeatherData(this.location()).subscribe({
        next: result => {
          console.log(result);
          this.current = result.current;
          this.forecast = result.forecast;
        }
      })
    });
  }

  changeLocation(event: string) {
    this.location.set(event)
  }
}
