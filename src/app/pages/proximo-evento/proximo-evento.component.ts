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
    {
      descripcion:
        '🚴‍♀️ ¡Vuelve el Ciclo Turismo Íbera 2025! 🚴‍♂️📍 Loreto, Corrientes🗓 26 y 27 de julio2️⃣ ¡Segunda edición del gran encuentro ciclista!Viví un finde a puro pedal en los increíbles senderos y caminos rurales de nuestra localidad.🛤 Recorridos: 40 km y 45 km🎁 1er premio: una bicicleta y muchos premios más 🏆Organiza: Grupo de Ciclistas Virgen de LoretoAuspicia: Municipalidad de Loreto📲 Inscribite o pedí info al:📞 3795 136509 / 3781 493348¡No te lo pierdas! Naturaleza, deporte y buena onda te esperan en Loreto 🌿💚',
      imagen: 'assets/images/miercoles3.jpg',
    },
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
  activeIndexEvento = 0;

  setActiveIndexEvento(index: number) {
    this.activeIndexEvento = index;
  }
}
