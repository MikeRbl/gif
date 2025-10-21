import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  @ViewChild('txtTagInput') public tagInput!: ElementRef<HTMLInputElement>;
  private gifService = inject(GifService);

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = ''; // Limpiar input
  }

}
