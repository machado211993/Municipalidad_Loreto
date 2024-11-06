import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Novedad {
  id: number;
  titulo: string;
  tipo: string; // Puede ser "Obra", "Evento" o "Acto"
  descripcion: string;
  imagen: string;
  fecha: string;
}

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [NgFor],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {
  novedades: Novedad[] = [
    {
      id: 1,
      titulo: "Inauguración de nuevo puente",
      tipo: "Obra",
      descripcion: "Inauguración del nuevo puente sobre el río que conectará la ciudad con la zona norte.",
      imagen: "assets/images/aviso.jpg",
      fecha: "2024-11-01"
    },
    {
      id: 2,
      titulo: "Festival de música local",
      tipo: "Evento",
      descripcion: "Un evento cultural con la presentación de bandas locales en el parque central.",
      imagen: "assets/images/aviso2.jpg",
      fecha: "2024-11-10"
    },
    {
      id: 3,
      titulo: "Acto por el Día de la Independencia",
      tipo: "Acto",
      descripcion: "Ceremonia oficial en la plaza principal para conmemorar el Día de la Independencia.",
      imagen: "assets/images/evento.jpg",
      fecha: "2024-07-09"
    },
    // Agrega más novedades según sea necesario
  ];
}
