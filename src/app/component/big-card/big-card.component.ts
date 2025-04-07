import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  standalone: true,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  photoCover: string =
    '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string =
    '';
}
