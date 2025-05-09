import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SHARED_IMPORTS } from '../../../../shared/models/sharedImports';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule, ...SHARED_IMPORTS],
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const yOffset = -80; // adjust offset
          const element = document.getElementById(fragment);
          if (element) {
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    });
  }
}
