import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  CarouselImage,
  ImageService,
} from '../../shared/services/image.service';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [],
})
export class CarouselComponent {
  carouselImages: CarouselImage[] = [];
  isLoading = true;

  // Owl Carousel Options
  customOptions: OwlOptions = {
    autoplay: true,
    lazyLoad: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    // navText: [
    //   '<i class="bi bi-chevron-left"></i> Prev ',
    //   'Next <i class="bi bi-chevron-right"></i>',
    // ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
    nav: false,
  };

  constructor(private imageService: ImageService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.isLoading = true;
    this.imageService.getImages().subscribe({
      next: (images) => {
        this.carouselImages = images;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching images:', error);
        this.isLoading = false;
      },
    });
  }
}
