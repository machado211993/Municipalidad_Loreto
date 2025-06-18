import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet], // <- Importá NgIf y NgTemplateOutlet para *ngIf con else
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent {
  activeIndex = 0;

  // funciones openZoom y closeZoom podés quitarlas si no las usás más
  informaciones: { descripcion: string; imagen: string }[] = [
    {
      descripcion:
        'https://play.google.com/store/apps/details?id=com.locucionar.fmloreto1001',
      imagen: 'assets/images/radio.jpeg',
    },
    {
      descripcion: '',
      imagen: 'assets/images/miercoles.jpg',
    },
    {
      descripcion:
        '🏥 ¡Loreto sigue avanzando! 🏥💚En el día de hoy, junto a la directora del Hospital J. R. Piñeiro, Dra. Julia Torres de Ortiz, recibimos con gran emoción el nuevo equipamiento médico que formará parte del tan esperado Hospital Moderno J. R. Piñeiro, próximo a inaugurarse.Cada equipo que llega representa una mejora concreta en la salud pública, una inversión en el presente y el futuro de todos queridos Loretanos.Agradecemos profundamente al Gobierno Provincial por trabajar de manera conjunta con nuestra gestión para hacer realidad este gran paso para Loreto.El compromiso compartido entre Provincia y Municipio es el camino para seguir transformando la vida de nuestra comunidad.¡Estamos cada vez más cerca de ver este sueño cumplido!',
      imagen: 'assets/images/miercoles2.jpg',
    },
    {
      descripcion:
        '✅ ¡Seguimos apostando al deporte!El equipo municipal hizo una gran entrega a la Dirección de Deportes para el campeonato de fútbol:🕒 Relojes digitales🟥🟨 Tarjetas🏳️‍🌈 Banderines⚽ Pelotas🛏️ Camilla🔊 Silbatos¡Gracias a una inversión que potencia el deporte local! ⚽🙌',
      imagen: 'assets/images/sabado3.jpeg',
    },
    {
      descripcion: '',
      imagen: 'assets/images/sabado2.jpeg',
    },
    {
      descripcion:
        '🚦 ¡Seguimos con la educación vial! 🚸 Estuvimos en la Escuela Ángel Bassi N.º 132, compartiendo una jornada súper educativa con los alumnos. 🧠✨Desde la Dirección de Tránsito de la Municipalidad seguimos recorriendo escuelas, enseñando sobre seguridad vial, respeto y responsabilidad en la vía pública.¡Gracias a toda la comunidad educativa por recibirnos con tanto entusiasmo! 💚🙌',
      imagen: 'assets/images/sabado5.jpeg',
    },
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
    {
      descripcion:
        'MORATORIA MUNICIPAL 2025 📝 Ya podés financiar tu deuda municipal, en cuotas  y sin intereses.Tenes tiempo hasta el viernes 31 de Marzo.',
      imagen: 'assets/images/info1.jpg',
    },
    {
      descripcion:
        '🏕️ ¡Información Importante de Hospedajes de Loreto Corrientes para el Verano 2025! 🌞Desde la Municipalidad y la Dirección de Turismo, te compartimos diferentes opciones de estadía para disfrutar al máximo de tus vacaciones en nuestro querido Loreto. 🏖️',
      imagen: 'assets/images/info3.jpg',
    },
  ];
  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
