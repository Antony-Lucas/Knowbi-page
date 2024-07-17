import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-value',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsValueComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
