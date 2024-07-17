import { Routes } from '@angular/router';
import { ContactScreenComponent } from './page/contact-screen/contact-screen.component';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { AntiCorruptionPolicyScreenComponent } from './page/policys/anti-corruption-policy-screen/anti-corruption-policy-screen.component';
import { PrivacyPolicyScreenComponent } from './page/policys/privacy-policy-screen/privacy-policy-screen.component';
import { ConsultancyComponent } from './page/solutions/consultancy/consultancy.component';
import { KoiosComponent } from './page/solutions/koios/koios.component';
import { ReportsComponent } from './page/solutions/reports/reports.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeScreenComponent,
    title: 'KnowBI',
  },
  {
    path: 'contact',
    component: ContactScreenComponent,
    title: 'KnowBI',
  },
  {
    path: 'koios',
    component: KoiosComponent,
    title: 'KnowBI',
  },
  // {
  //   path: 'demeter',
  //   component: DemeterComponent,
  //   title: 'KnowBI: Deméter',
  // },
  {
    path: 'report_development',
    component: ReportsComponent,
    title: 'KnowBI',
  },
  {
    path: 'support',
    component: ConsultancyComponent,
    title: 'KnowBI',
  },
  {
    path: 'anticorruption_policy',
    component: AntiCorruptionPolicyScreenComponent,
    title: 'KnowBI',
  },
  {
    path: 'privacy_policy',
    component: PrivacyPolicyScreenComponent,
    title: 'KnowBI',
  },
];
