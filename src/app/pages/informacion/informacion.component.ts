import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'], // Corregido el nombre del atributo
})
export class InformacionComponent {
  informaciones: { descripcion: string; imagen: string }[] = [
    {
      descripcion: '',
      imagen: 'assets/images/info7.jpeg',
    },
    {
      descripcion: '',
      imagen: 'assets/images/info1.jpeg',
    },

    {
      descripcion: '',
      imagen: 'assets/images/info3.jpeg',
    },

    {
      descripcion: '',
      imagen: 'assets/images/info6.jpeg',
    },

    {
      descripcion: '',
      imagen: 'assets/images/actu1.jpeg',
    },

    {
      descripcion: '',
      imagen: 'assets/images/actu4.jpeg',
    },
    {
      descripcion: '',
      imagen: 'assets/images/info5.jpeg',
    },

    // Agrega más informacion según sea necesario
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
