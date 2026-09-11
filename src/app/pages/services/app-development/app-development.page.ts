import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.page.html',
  styleUrls: ['./app-development.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppDevelopmentPage {}