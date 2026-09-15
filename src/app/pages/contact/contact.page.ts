import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false
})
export class ContactPage {

  contactForm: FormGroup;

  showNotice = false;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.contactForm = this.formBuilder.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      company: [''],

      service: [
        '',
        Validators.required
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }

  handleContact(): void {

    this.showNotice = false;

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    this.showNotice = true;

  }

}