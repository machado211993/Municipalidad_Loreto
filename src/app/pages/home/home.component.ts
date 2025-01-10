import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoComponent } from "../../components/video/video.component";
import { ProximoEventoComponent } from '../proximo-evento/proximo-evento.component';
import { NovedadComponent } from '../novedad/novedad.component';
import { InformacionComponent } from '../informacion/informacion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProximoEventoComponent, NovedadComponent, InformacionComponent],
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