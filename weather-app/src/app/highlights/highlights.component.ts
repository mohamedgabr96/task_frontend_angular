import {Component, Input, input} from '@angular/core';
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {

  @Input({required: true}) current!: any;


}
