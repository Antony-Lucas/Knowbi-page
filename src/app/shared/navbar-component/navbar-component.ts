import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer-component/footer-component';
import { CardsValueComponent } from '../../page/home-screen/cards-values/cards.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    NgOptimizedImage,
    MatToolbarModule,
    CardsValueComponent,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  icons = {
    menu: faBars,
  };

  openClientArea() {
    window.open('https://knowbi.com.br/suporte/', '_blank');
  }
}
