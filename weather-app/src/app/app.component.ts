import {Component, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { WeatherApiService} from "./services/weather-api.service";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {HeaderComponent} from "./header/header.component";
import {ForecastComponent} from "./forecast/forecast.component";
import {HighlightsComponent} from "./highlights/highlights.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, HeaderComponent, ForecastComponent, HighlightsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  location = signal<string>('cairo');
  degree = signal<string>('c');

  current: {} = {};
  forecast: [] = [];

  constructor(private weatherApiService: WeatherApiService) {
    effect(() => {
      this.weatherApiService.getWeatherData(this.location()).subscribe({
        next: result => {
          console.log(result);
          this.forecast = result.forecast.forecastday;
          this.current = result.current;
        }
      })
    });
  }

  changeLocation(event: string): void {
    this.location.set(event)
  }

  changeDegree(event: string): void {
    this.degree.set(event)
  }
}
