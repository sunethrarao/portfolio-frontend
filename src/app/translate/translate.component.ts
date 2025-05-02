import { Component, inject } from '@angular/core';
import { TranslationComponent } from '../feature/translation/translation/translation.component';
import { SupportedLanguages } from '../shared/models/language.models';
import { I18nService } from '../shared/services/i18n.service';

@Component({
  selector: 'app-translate',
  imports: [TranslationComponent],
  standalone: true,
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
})
export class TranslateComponent {
  readonly i18n = inject(I18nService);
  readonly currentLanguage = this.i18n.getCurrentLanguage();

  changeLanguage(lang: SupportedLanguages, event: MouseEvent): void {
    event.preventDefault();
    this.i18n.setLanguage(lang);
  }
}
