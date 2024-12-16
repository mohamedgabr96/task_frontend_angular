import {Component, ElementRef, input, output, viewChild} from '@angular/core';

import { UpperCasePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ UpperCasePipe, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  location = input.required<string>();
  degree = input.required<string>();
  degreeChange = output<string>();

  onChangeDegree(degree: string): void {
    this.degreeChange.emit(degree)
  }
}
