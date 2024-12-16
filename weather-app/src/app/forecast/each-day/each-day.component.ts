import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-each-day',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './each-day.component.html',
  styleUrl: './each-day.component.css'
})
export class EachDayComponent {

}
