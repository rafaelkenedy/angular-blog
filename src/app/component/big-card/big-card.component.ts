import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  Id:string="0"
  @Input()
  photoCover: string =
    '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string =
    '';
}
