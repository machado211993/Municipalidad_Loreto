import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NovedadesComponent } from "../novedades/novedades.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NovedadesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }