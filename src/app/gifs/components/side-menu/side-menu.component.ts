import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options/gifs-side-menu-options.component';
import { GisSideMenuHistoryComponent } from './gis-side-menu-history/gis-side-menu-history.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    GifsSideMenuHeaderComponent,
    GifsSideMenuOptionsComponent,
    GisSideMenuHistoryComponent
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent { }