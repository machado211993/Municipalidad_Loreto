import { Component } from '@angular/core';
import { VideoComponent } from '../../components/video/video.component';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-novedad',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, NgClass, VideoComponent], // <- Importá NgIf y NgTemplateOutlet para *ngIf con else
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css'], // corregí styleUrl por styleUrls (plural)
})
export class NovedadComponent {
  /*novedades = [
    {
      descripcion:
        '🏥 ¡Loreto sigue avanzando! 🏥💚En el día de hoy, junto a la directora del Hospital J. R. Piñeiro, Dra. Julia Torres de Ortiz, recibimos con gran emoción el nuevo equipamiento médico que formará parte del tan esperado Hospital Moderno J. R. Piñeiro, próximo a inaugurarse.Cada equipo que llega representa una mejora concreta en la salud pública, una inversión en el presente y el futuro de todos queridos Loretanos.Agradecemos profundamente al Gobierno Provincial por trabajar de manera conjunta con nuestra gestión para hacer realidad este gran paso para Loreto.El compromiso compartido entre Provincia y Municipio es el camino para seguir transformando la vida de nuestra comunidad.¡Estamos cada vez más cerca de ver este sueño cumplido!',
      imagen: 'assets/images/miercoles2.jpg',
    },

    // agrega más novedades si querés
  ];*/

  activeIndexNovedad = 0;

  setActiveIndexNovedad(index: number) {
    this.activeIndexNovedad = index;
  }
}
