import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';
import { CarouselComponent } from "../feature/carousel/carousel.component";
@Component({
  selector: 'app-portfolio-home',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './portfolio-home.component.html',
  styleUrl: './portfolio-home.component.scss',
})
export class PortfolioHomeComponent {
  theme?: any;
  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }

  ngOnInit(): void {}
}
