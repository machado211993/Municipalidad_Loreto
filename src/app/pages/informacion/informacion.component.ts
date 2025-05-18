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
      descripcion: "",
      imagen: "assets/images/info1.jpeg",
    },

    {
      descripcion: "Hoy vivimos una jornada increíble en el playón del Polideportivo Municipal 💪🏽, donde distintas áreas de la Municipalidad de Loreto brindaron atención y servicios a nuestros vecinos 🤝👨🏽‍💼 Estuvo presente el Intendente Prof. Orlando Maidana junto al equipo del CIC, Salud, Acción Social, Producción (con entrega de semillas 🌱), Oficina Móvil de Gestión, Ropero Solidario 👕, Turismo 🧭 y la Feria de Emprendedores 🛍️🎉 También compartimos Bingo, Truco 🃏 y cerramos con un delicioso chocolate para todos 🍫❤️ 🙏 Agradecemos al equipo de la Dirección General de Epidemiología del Ministerio de Salud de la Provincia por su valioso aporte.💚 !Seguimos trabajando cerca de la gente!",
      imagen: "assets/images/info2.jpeg",
    },
    {
      descripcion: "",
      imagen: "assets/images/info3.jpeg",
    },

    {
      descripcion: "",
      imagen: "assets/images/info4.jpeg",
    },
   

    {
      descripcion: "",
      imagen: "assets/images/info6.jpeg",
    },
     {
      descripcion: "",
      imagen: "assets/images/info5.jpeg",
    },
    {
      descripcion: "",
      imagen: "assets/images/actu1.jpeg",
    },

    {
      descripcion: "",
      imagen: "assets/images/actu4.jpeg",
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
