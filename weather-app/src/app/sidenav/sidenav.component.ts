import { Component, output, input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DatePipe} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [FormsModule, DatePipe, MatDividerModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  search!: string;
  location = input.required<string>();
  locationChange = output<string>()

  currentLocation = input.required<any>();

  onSubmit(): void {
    const search = this.search;
    this.locationChange.emit(search);
    this.search = '';
    console.log(this.currentLocation());
  }

}
