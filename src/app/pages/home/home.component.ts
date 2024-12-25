import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NovedadesComponent } from "../novedades/novedades.component";
import { VideoComponent } from "../../components/video/video.component";
import { EventoProximoComponent } from "../evento-proximo/evento-proximo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, EventoProximoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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