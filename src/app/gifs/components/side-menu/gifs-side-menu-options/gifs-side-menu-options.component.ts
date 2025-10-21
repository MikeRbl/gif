import { Component, inject } from '@angular/core';
import { GifService } from '../../../services/gif.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-gifs-side-menu-options',
  standalone: true,
   imports: [CommonModule, RouterModule], // Añade RouterModule aquí
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.css'
})
export class GifsSideMenuOptionsComponent {
  public gifsservice = inject(GifService);

  // La propiedad para la ruta debe ser 'router' (minúscula) para que coincida con el HTML
  public menuOptions = [
    {icon: 'fa-solid fa-gauge', title: 'Dashboard', subtitle: 'Data and Stats', router: '/dashboard'},
    {icon: 'fa-solid fa-chart-line', title: 'Trending', subtitle: 'The Best Gifs', router: '/trending'},
    {icon: 'fa-brands fa-searchengin', title: 'Search', subtitle: 'Find your gifs', router: '/search'},
  ];
}