import { Component, inject } from '@angular/core';
import { SupportedLanguages } from '../../../shared/models/language.models';
import { I18nService } from '../../../shared/services/i18n.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS } from '../../../shared/models/sharedImports';

@Component({
  selector: 'app-translation',
  imports: [CommonModule, ...SHARED_IMPORTS],
  standalone: true,
  templateUrl: './translation.component.html',
  styleUrl: './translation.component.scss',
})
export class TranslationComponent {
  theme?: any;
  collapsed = true;
  readonly i18n = inject(I18nService);
  readonly currentLanguage = this.i18n.getCurrentLanguage();

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }

  changeLanguage(lang: SupportedLanguages, event: MouseEvent): void {
    event.preventDefault();
    this.i18n.setLanguage(lang);
  }
}
