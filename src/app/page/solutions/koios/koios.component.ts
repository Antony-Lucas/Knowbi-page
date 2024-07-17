import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer-component/footer-component';
import { NavbarComponent } from '../../../shared/navbar-component/navbar-component';

@Component({
  selector: 'app-koios',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './koios.component.html',
  styleUrl: './koios.component.css',
})
export class KoiosComponent {}
