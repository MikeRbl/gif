import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { GifsSideMenuHeaderComponent } from './components/side-menu/gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from './components/side-menu/gifs-side-menu-options/gifs-side-menu-options.component';
import { GisSideMenuHistoryComponent } from './components/side-menu/gis-side-menu-history/gis-side-menu-history.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    SearchPageComponent,
    TrendingPageComponent,
    SideMenuComponent,
    GifsSideMenuHeaderComponent,
    GifsSideMenuOptionsComponent,
    GisSideMenuHistoryComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule
  ]
})
export class GifsModule { }
