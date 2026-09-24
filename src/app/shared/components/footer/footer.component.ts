import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent {

  private readonly whatsappNumber = '919187145628';

  private readonly whatsappMessage =
    `Hi Atnav,

I'm interested in your services and would like to discuss my project.

Thank you!`;

  openWhatsApp(): void {
    const message = encodeURIComponent(this.whatsappMessage);
    const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}