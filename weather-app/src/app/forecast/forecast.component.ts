import {Component, Input, input} from '@angular/core'
import {EachDayComponent} from "./each-day/each-day.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  standalone: true,
  imports: [
    EachDayComponent,
    DatePipe
  ]
})
export class ForecastComponent {
  @Input({required: true}) forecast!: any;
  @Input({required: true}) degree !: any;
}
