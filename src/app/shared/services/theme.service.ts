import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = signal<'light' | 'dark'>(this.getSavedTheme());
  theme = computed(() => this._theme());

  constructor() {
    effect(() => {
      const current = this._theme();
      document.body.className =
        current === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
      localStorage.setItem('theme', current);
    });
  }

  toggleTheme(): void {
    this._theme.set(this._theme() === 'light' ? 'dark' : 'light');
  }

  private getSavedTheme(): 'light' | 'dark' {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  }
}
