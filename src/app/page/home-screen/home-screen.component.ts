import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/footer-component/footer-component';
import { CardsValueComponent } from './cards-values/cards.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-screen',
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
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent implements OnInit {
  fundamentals_description = [
    {
      title: 'Business Intelligence',
      description:
        'Somos especializados em fornecer soluções de BI que permitem às empresas coletar, analisar e visualizar seus dados de negócios de forma inteligente. Através do uso de tecnologias avançadas, como análise de dados, mineração de dados e painéis interativos, ajudamos nossos clientes a obter insights valiosos sobre suas operações e tomar decisões informadas.',
    },
    { title: 'Inteligência Artificial', description: '' },
    { title: 'Transformação Digital', description: '' },
    { title: 'Segurança da Informação', description: '' },
    { title: 'Suporte e Capacitação', description: '' },
  ];

  company_values = [
    {
      title: 'Ética',
      description:
        'Agimos de forma honesta, íntegra e respeitosa, escolhemos sempre fazer do jeito certo.',
    },
    {
      title: 'Empatia',
      description:
        'Compreendemos e partilhamos os sentimentos alheios, promovendo a conexão humana e a inclusão.',
    },
    {
      title: 'Respeito às Pessoas',
      description:
        'Atendemos todos os nossos clientes com paixão, entregamos nosso melhor e contribuímos para o seu crescimento.',
    },
    {
      title: 'Qualidade',
      description:
        'Somos obstinados em melhorar continuamente para gerar valor aos nossos clientes e ter excelência em tudo que fazemos.',
    },
    {
      title: 'Resultado',
      description:
        'Somos focados em atingir os objetivos estabelecidos, buscando sucesso em tudo que fazemos.',
    },
    {
      title: 'Paixão por transformar vidas',
      description:
        'Somos protagonistas, capazes de criar e promover mudanças. Apaixonados pela excelência e determinados a melhorar sempre.',
    },
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.scrollToTop(500);
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

  openClientArea() {
    window.open('https://knowbi.com.br/suporte/', '_blank');
  }
}
