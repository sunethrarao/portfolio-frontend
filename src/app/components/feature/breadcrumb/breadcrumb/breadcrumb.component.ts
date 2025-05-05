import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_IMPORTS } from '../../../../shared/models/sharedImports';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule, ...SHARED_IMPORTS],
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {}
