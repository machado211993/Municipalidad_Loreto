import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'] // Corregido a 'styleUrls'
})
export class VideoComponent {
  // Input property to dynamically pass the video URL
  @Input() videoUrl: string = '';

}
