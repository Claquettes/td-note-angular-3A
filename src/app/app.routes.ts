import { Routes } from '@angular/router';
import { ViewAirFranceComponent } from './components/view-airfrance/view-airfrance.component';
export const routes: Routes = [
  {
    path: 'flight/:type', component: ViewAirFranceComponent
  },
  {
    path: '**', redirectTo: 'flight/decollages'
  }
];