import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheService {
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
