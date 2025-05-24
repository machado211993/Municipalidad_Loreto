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
<<<<<<< Updated upstream
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
=======
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
      imagen: 'assets/images/sabado6.jpeg',
>>>>>>> Stashed changes
    },

    {
      descripcion: '',
<<<<<<< Updated upstream
      imagen: 'assets/images/info6.jpeg',
=======
      imagen: 'assets/images/info11.jpeg',
>>>>>>> Stashed changes
    },

    {
      descripcion: '',
<<<<<<< Updated upstream
      imagen: 'assets/images/actu1.jpeg',
    },

    {
      descripcion: '',
      imagen: 'assets/images/actu4.jpeg',
    },
    {
      descripcion: '',
      imagen: 'assets/images/info5.jpeg',
=======
      imagen: 'assets/images/info30.jpeg',
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
>>>>>>> Stashed changes
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
