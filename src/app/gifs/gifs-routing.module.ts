import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      { path: 'search', component: SearchPageComponent },
      { path: 'trending', component: TrendingPageComponent },
      { path: '', redirectTo: 'trending', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
