import { Component } from '@angular/core';
import { VideoComponent } from '../../components/video/video.component';

@Component({
  selector: 'app-novedad',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './novedad.component.html',
  styleUrl: './novedad.component.css'
})
export class NovedadComponent {

}
