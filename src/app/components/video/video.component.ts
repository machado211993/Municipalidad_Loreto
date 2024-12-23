import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  // Input property to dynamically pass the video URL
  @Input() videoUrl: string = '';
}
