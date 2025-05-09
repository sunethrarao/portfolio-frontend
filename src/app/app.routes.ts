import { ExtraOptions, Routes } from '@angular/router';
import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { TranslateComponent } from './components/translate/translate.component';
import { ChatbotComponent } from './components/feature/chatbot/chatbot/chatbot.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PortfolioHomeComponent,
  },
  {
    path: 'translate',
    component: TranslateComponent,
  },
  {
    path: 'chat',
    component: ChatbotComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
