import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-digital-growth',
  templateUrl: './digital-growth.page.html',
  styleUrls: ['./digital-growth.page.scss'],
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
export class DigitalGrowthPage {}