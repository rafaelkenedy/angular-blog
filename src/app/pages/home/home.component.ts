import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../component/menu-title/menu-title.component";
import { BigCardComponent } from "../../component/big-card/big-card.component";
import { SmallCardComponent } from "../../component/small-card/small-card.component";
import { MenuBarComponent } from "../../component/menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
