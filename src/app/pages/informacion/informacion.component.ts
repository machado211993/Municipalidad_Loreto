import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'] // Corregido el nombre del atributo
})
export class InformacionComponent {
  informaciones: { descripcion: string; imagen: string }[] = [
    {
      descripcion: "MORATORIA MUNICIPAL 2025 📝 Ya podés financiar tu deuda municipal, en cuotas  y sin intereses.Tenes tiempo hasta el viernes 31 de Marzo.",
      imagen: "assets/images/info1.jpg",
    },
    {
      descripcion: "🏕️ ¡Información Importante de Hospedajes de Loreto Corrientes para el Verano 2025! 🌞Desde la Municipalidad y la Dirección de Turismo, te compartimos diferentes opciones de estadía para disfrutar al máximo de tus vacaciones en nuestro querido Loreto. 🏖️",
      imagen: "assets/images/info3.jpg",
    },
    {
      descripcion: "🗓️ 13 y 14  de Febrero, 20 y 21 de Febrero; Loreto te Espera,  para vivir nuestro Carnaval!!🪶 🥁.",
      imagen: "assets/images/info4.jpg",
    },
    // Agrega más informacion según sea necesario
  ];

  openZoom(imagen: string) {
    const modal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage') as HTMLImageElement;
    if (modal) {
      modal.style.display = "block";
      zoomImage.src = imagen;
    }
  }

  closeZoom() {
    const modal = document.getElementById('zoomModal');
    if (modal) {
      modal.style.display = "none";
    }
  }
}
