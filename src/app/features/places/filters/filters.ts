import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 🔥 FALTABA ESTO

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule], // 👈 🔥 OBLIGATORIO
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class FiltersComponent {

  tags: string[] = [
    'Cultura', 'Turismo', 'Compras', 'Entretenimiento', 'Naturaleza',
    'Familia', 'Aire libre', 'Vida nocturna', 'Gastronomía', 'Música',
    'Aventura', 'Educación', 'Historia', 'Arte', 'Eventos',
    'Lujo', 'Experiencia', 'Café', 'Deporte', 'Salud', 'Romántico'
  ];

  selectedTag: string | null = null;

  @Output() filterChange = new EventEmitter<string | null>();

  selectTag(tag: string) {
    this.selectedTag = this.selectedTag === tag ? null : tag;
    this.filterChange.emit(this.selectedTag);
  }
}
