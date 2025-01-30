import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Coordenadas exactas de la Municipalidad de Loreto, Corrientes
    const lat = -27.7699835;
    const lng = -57.2803951;
  
    this.map = L.map('mapa').setView([lat, lng], 18); // Zoom nivel 18 para mayor detalle
  
    // Agregar capa base (mapa)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  
    // Agregar un marcador en la ubicación
    L.marker([lat, lng]).addTo(this.map)
      .bindPopup('Municipalidad de Loreto, Corrientes')
      .openPopup();
  }
  
  
  
  
}
