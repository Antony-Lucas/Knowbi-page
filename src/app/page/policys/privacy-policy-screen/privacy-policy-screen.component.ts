import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer-component/footer-component';
import { NavbarComponent } from '../../../shared/navbar-component/navbar-component';

@Component({
  selector: 'app-privacy-policy-screen',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './privacy-policy-screen.component.html',
  styleUrl: './privacy-policy-screen.component.css',
})
export class PrivacyPolicyScreenComponent {}
