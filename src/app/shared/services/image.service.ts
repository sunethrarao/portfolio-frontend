import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CarouselImage {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imagesUrl = 'assets/data/images.json'; // Remove the leading slash
  constructor(private http: HttpClient) {}

  getImages(): Observable<CarouselImage[]> {
    // Replace with your actual JSON file path
    return this.http.get<CarouselImage[]>(this.imagesUrl);
  }
}
