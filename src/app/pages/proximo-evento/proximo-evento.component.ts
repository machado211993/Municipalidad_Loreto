import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Evento {
  descripcion: string;
  imagen: string;
}
@Component({
  selector: 'app-proximo-evento',
  standalone: true,
  imports: [NgFor],
  templateUrl: './proximo-evento.component.html',
  styleUrl: './proximo-evento.component.css',
})
export class ProximoEventoComponent {
  eventos: Evento[] = [
    /*{
      descripcion: "",
      imagen: "assets/images/carnaval.jpg",
    },*/
    // Agrega más novedades según sea necesario
  ];

  openZoom(imagen: string) {
    const modal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage') as HTMLImageElement;
    if (modal) {
      modal.style.display = 'block';
      zoomImage.src = imagen;
    }
  }

  closeZoom() {
    const modal = document.getElementById('zoomModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
