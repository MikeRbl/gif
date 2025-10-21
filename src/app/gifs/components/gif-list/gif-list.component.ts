// src/app/gifs/components/gif-list/gif-list.component.ts
import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gify';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor, etc.

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent {
  @Input() gifs: Gif[] = [];
  @Input() isLoading: boolean = false;
}