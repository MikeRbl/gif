import { Component, inject } from '@angular/core';
import { GifService } from '../../../services/gif.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gifs-side-menu-options',
  standalone: false,
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.css'
})
export class GifsSideMenuOptionsComponent {
  public gifsservice = inject(GifService);

  public menuOptions = [
    {icon: 'fa-solid fa-gauge', title: 'Dashboard', subtitle: 'Data and Stats', Router: '/dashboard'},
    {icon: 'fa-solid fa-chart-line', title: 'Trending', subtitle: 'The Best Gifs', Router: '/trending'},
    {icon: 'fa-brands fa-searchengin', title: 'Search', subtitle: 'Find your gifs', Router: '/search'},

  ];

  searchFromHistory(tag: string): void {
    this.gifsservice.searchTag(tag);
  }

}
