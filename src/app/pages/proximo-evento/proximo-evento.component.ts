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
  styleUrl: './proximo-evento.component.css'
})
export class ProximoEventoComponent {
  eventos: Evento[] = [
    {
      descripcion: "📌Estamos trabajando para ofrecer un ambiente adecuado y respetuoso a quienes visiten a sus seres queridos.👉 Durante estos días, desde la Municipalidad de Loreto , se está realizando la construcción de el muro perimetral, refacción de sanitarios, Pintura en la Capilla, limpieza y mantenimiento en general en el cementerio, con el objetivo de que el lugar luzca impecable para el 02 de Noviembre Día de los Fieles Difuntos",
      imagen: "assets/images/novedad4.jpg",
    },
    {
      descripcion: "👉Desde la Dirección de Turismo de la Municipalidad de Loreto, agradecemos a tutores y niños por la visita a, 𝗔𝘃𝗲𝗻𝘁𝘂𝗿𝗮 𝗜𝗯𝗲𝗿𝗮 𝗣𝗼𝗿𝘁𝗮𝗹 𝗦𝗮𝗻 𝗔𝗻𝘁𝗼𝗻𝗶𝗼 🐊, por promover y concientizar nuestro destino hacia nuestra comunidad .👨‍👩‍👦‍👦🙌 Gracias a parques y reserva  de la Provincia; Guardaparques , Jefe de Seccional Alejandro  Moreira y Guia Gonzalo  Solis.",
      imagen: "assets/images/novedad5.jpg",
    },
    {
      descripcion: "En el marco de la Noche de los Museos, se llevó adelante distintas actividades en el 𝗠𝘂𝘀𝗲𝗼 𝗦𝗮𝗰𝗿𝗼 de nuestra localidad, organizado por el Instituto de Cultura de la Provincia, en forma conjunta con la Municipalidad de Loreto, donde los vecinos y turistas disfrutaron de visitas guiadas 𝗚𝗿𝗮𝘁𝘂𝗶𝘁𝗮𝘀.",
      imagen: "assets/images/novedad6.jpg",
    },
    {
      descripcion: "👉 El Intendente, El Viceintendente y los Concejales hicieron entrega de indumentaria de trabajar al área de obras públicas 👷👷‍♀️ y también se hizo entrega de camisetas y pelotas al equipo femenino de junior 👕⚽, que por primera vez van a participar del campeonato local.🥅",
      imagen: "assets/images/novedad1.jpg",
    },
    {
      descripcion: "👉El municipio desea felices 42 años al Colegio Secundario Loreto.Celebramos su historia y compromiso por una educación de calidad para todos los loretanos.",
      imagen: "assets/images/novedad2.jpg",
    },
    {
      descripcion: "Hicimos entrega de nuevas estructuras para las prácticas de #Cestoball,camisetas y pelotas al equipo de Loreto y Colegio Secundario. También dimos apertura al Campeonato de #Fútbol Femenino entregando pelotas a los organizadores de este apasionante deporte🙌🏻",
      imagen: "assets/images/novedad3.jpg",
    },
    // Agrega más novedades según sea necesario
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
