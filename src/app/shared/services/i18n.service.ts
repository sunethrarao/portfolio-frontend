import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { SupportedLanguages, Translation } from '../models/language.models';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  private readonly http = inject(HttpClient);

  // Cache for loaded translations
  private translationsCache = new Map<SupportedLanguages, Translation>();

  // Define a signal for the current language
  private currentLanguage = signal<SupportedLanguages>(
    this.getInitialLanguage()
  );

  // Signal for the current translations
  private translationsData = signal<Translation | null>(null);

  // Create a computed signal for translations
  readonly translations$ = computed<Translation>(() => {
    return this.translationsData() || ({} as Translation);
  });

  // Loading state signal
  private loading = signal<boolean>(false);
  readonly loading$ = computed(() => this.loading());

  constructor() {
    // Load initial translations
    this.loadTranslations(this.currentLanguage());
  }

  // Get the initial language from localStorage or default to 'en'
  private getInitialLanguage(): SupportedLanguages {
    const savedLanguage = localStorage.getItem(
      this.LANGUAGE_KEY
    ) as SupportedLanguages;
    return savedLanguage || this.getBrowserLanguage() || 'en';
  }

  // Detect browser language
  private getBrowserLanguage(): SupportedLanguages | null {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' || browserLang === 'fr'
      ? (browserLang as SupportedLanguages)
      : null;
  }

  // Get the current language
  getCurrentLanguage(): Signal<SupportedLanguages> {
    return computed(() => this.currentLanguage());
  }

  // Change the language
  setLanguage(language: SupportedLanguages): void {
    if (this.currentLanguage() !== language) {
      this.currentLanguage.set(language);
      localStorage.setItem(this.LANGUAGE_KEY, language);
      this.loadTranslations(language);
    }
  }

  // Load translations from JSON files
  private loadTranslations(language: SupportedLanguages): void {
    // Check if we have cached translations
    if (this.translationsCache.has(language)) {
      this.translationsData.set(this.translationsCache.get(language)!);
      return;
    }

    // Set loading state
    this.loading.set(true);

    // Load translations from JSON file
    this.http.get<Translation>(`/assets/data/i18n/${language}.json`).subscribe({
      next: (translations) => {
        // Cache the translations
        this.translationsCache.set(language, translations);
        // Update the translations signal
        this.translationsData.set(translations);
        // Turn off loading state
        this.loading.set(false);
      },
      error: (err) => {
        console.error(`Failed to load translations for ${language}:`, err);
        this.loading.set(false);

        // If we fail to load the requested language, try to fall back to English
        if (language !== 'en') {
          console.log('Falling back to English translations');
          this.loadTranslations('en');
        }
      },
    });
  }
}
