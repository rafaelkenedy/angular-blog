import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  constructor(private route: ActivatedRoute) {}

  private id: string | null = '0';

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      this.setValuesContent(this.id);
    });
  }

  setValuesContent(id: string | null) {
    const result = dataFake.find((article) => article.id === id);
    if (result) {
      console.log(result);
    } else {
      console.warn('Artigo não encontrado!');
    }
  }
}
