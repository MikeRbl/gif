// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Cambiado de 'dashboard' para ser la ruta principal
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component')
      .then(m => m.DashboardPageComponent),
    children: [
      {
        path: 'search',
        title: 'Search Gifs',
        loadComponent: () => import('./gifs/pages/search-page/search-page.component')
          .then(m => m.SearchPageComponent),
      },
      {
        path: 'trending',
        title: 'Trending Gifs',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page.component')
          .then(m => m.TrendingPageComponent),
      },
      {
        path: '', // Ruta por defecto dentro de dashboard
        redirectTo: 'trending',
        pathMatch: 'full'
      }
    ]
  },
  // Ya no necesitas redirecciones aquí si '' carga el dashboard
  {
    path: '**', // Captura cualquier otra ruta
    redirectTo: '' // Redirige a la ruta principal (dashboard)
  }
];