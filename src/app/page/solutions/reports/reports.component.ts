import {
  CommonModule,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../../../shared/footer-component/footer-component';
import { NavbarComponent } from '../../../shared/navbar-component/navbar-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.scrollToTop(300);
    }
  }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  scrollToTop(duration: number): void {
    if (!this.isBrowser()) {
      return;
    }

    const start = window.scrollY;
    const startTime =
      'now' in window.performance ? performance.now() : new Date().getTime();

    const scroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, start - start * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }

  contact() {
    this.router.navigateByUrl('/contact');
  }
}
