import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component'; // Import GifListComponent
import { CommonModule } from '@angular/common'; // For *ngIf, etc.

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [GifListComponent, CommonModule], // Import GifListComponent
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  public gifService = inject(GifService);
  // No se necesita un ngOnInit específico aquí, ya que la búsqueda se activa por la entrada del usuario
  // y el servicio gestiona la lista de GIFs.
}