import { Component, inject, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component'; // Import GifListComponent
import { CommonModule } from '@angular/common'; // For *ngIf, etc.

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [GifListComponent, CommonModule], // Import GifListComponent
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export class TrendingPageComponent implements OnInit {
  public gifService = inject(GifService);

  ngOnInit(): void {
    // Asegura que los GIFs de tendencia se carguen cuando se accede directamente a esta página.
    // El servicio ya los carga al inicio si el historial está vacío, pero esto lo garantiza si el usuario navega aquí.
    if (this.gifService.gifList().length === 0 && !this.gifService.isLoading()) {
      this.gifService.loadTrendingGifs();
    }
  }
}