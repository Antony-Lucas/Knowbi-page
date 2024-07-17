import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    const backToTopButton = this.document.getElementById('back-to-top');
    if (backToTopButton) {
      this.renderer.listen(backToTopButton, 'click', () => {
        this.scrollToTop(1000);
      });
    }
  }

  scrollToTop(duration: number) {
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
}
