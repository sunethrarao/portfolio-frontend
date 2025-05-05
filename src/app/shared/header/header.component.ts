import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../components/feature/breadcrumb/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  theme?: any;
  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
