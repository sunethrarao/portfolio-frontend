import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CacheService } from '../services/cache.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  theme?: any;
  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }
}
