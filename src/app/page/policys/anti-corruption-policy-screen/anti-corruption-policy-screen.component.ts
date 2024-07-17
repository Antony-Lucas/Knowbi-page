import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer-component/footer-component';
import { NavbarComponent } from '../../../shared/navbar-component/navbar-component';

@Component({
  selector: 'app-anti-corruption-policy-screen',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './anti-corruption-policy-screen.component.html',
  styleUrl: './anti-corruption-policy-screen.component.css',
})
export class AntiCorruptionPolicyScreenComponent {}
