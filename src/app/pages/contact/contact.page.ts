import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false
})
export class ContactPage {

  contactForm: FormGroup;

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  private readonly formspreeEndpoint =
    'https://formspree.io/f/moevwpgj';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClient
  ) {

    this.contactForm = this.formBuilder.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
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

    this.submitSuccess = false;
    this.submitError = false;

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    const payload = {

      name:
        this.contactForm.value.name,

      email:
        this.contactForm.value.email,

      company:
        this.contactForm.value.company ||
        'Not provided',

      service:
        this.contactForm.value.service,

      message:
        this.contactForm.value.message,

      _subject:
        `New ATNAV enquiry — ${this.contactForm.value.service}`

    };

    const headers =
      new HttpHeaders({
        Accept: 'application/json'
      });

    this.http
      .post(
        this.formspreeEndpoint,
        payload,
        { headers }
      )
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe({

        next: () => {

          this.submitSuccess = true;

          this.contactForm.reset({
            name: '',
            email: '',
            company: '',
            service: '',
            message: ''
          });

        },

        error: (error) => {

          console.error(
            'Contact form submission failed:',
            error
          );

          this.submitError = true;

        }

      });

  }

}