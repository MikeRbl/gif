// src/app/gifs/components/side-menu/gifs-side-menu-header/gifs-side-menu-header.component.ts
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GifService } from '../../../services/gif.service';

@Component({
  selector: 'app-gifs-side-menu-header',
  standalone: true, // Si usas standalone
  imports: [], // Si usas standalone
  templateUrl: './gifs-side-menu-header.component.html',
  styleUrls: ['./gifs-side-menu-header.component.css']
})
export class GifsSideMenuHeaderComponent {
  @ViewChild('txtTagInput') public tagInput!: ElementRef<HTMLInputElement>;
  private gifService = inject(GifService);

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = ''; // Limpiar input
  }
}