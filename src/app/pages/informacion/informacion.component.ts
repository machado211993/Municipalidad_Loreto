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
      descripcion: '',
      imagen: 'assets/images/sabado2.jpeg',
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
      imagen: 'assets/images/info1.jpg',
    },
    {
      descripcion: '',
      imagen: 'assets/images/info3.jpg',
    },
  ];
  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
