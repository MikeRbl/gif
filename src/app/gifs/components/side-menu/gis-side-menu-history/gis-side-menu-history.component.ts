// src/app/gifs/components/side-menu/gis-side-menu-history/gis-side-menu-history.component.ts
import { Component, inject } from '@angular/core';
import { GifService } from '../../../services/gif.service'; // Importa el servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gis-side-menu-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gis-side-menu-history.component.html',
  styleUrl: './gis-side-menu-history.component.css'
})
export class GisSideMenuHistoryComponent {
  public gifService = inject(GifService); // Inyecta el servicio

  // Método para buscar desde el historial
  searchTagFromHistory(tag: string): void {
    this.gifService.searchTag(tag);
  }
}