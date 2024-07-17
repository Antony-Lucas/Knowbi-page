import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer-component/footer-component';
import { NavbarComponent } from '../../../shared/navbar-component/navbar-component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {}
