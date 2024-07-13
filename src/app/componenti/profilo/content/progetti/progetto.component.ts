import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-progetto',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './progetto.component.html',
  styleUrl: './progetto.component.css'
})
export class ProgettoComponent {

  @Input() progetto: any;
  currentImageIndex = 0;
  // Ottiene l'URL dell'immagine corrente
  get currentImageSrc(): string {
    console.log(this.currentImageIndex);
    return this.progetto.imageSrc[this.currentImageIndex];
  }

  //Ora gestisco lo scorrimento delle immagini

  // Passa all'immagine precedente
  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.progetto.imageSrc.length) % this.progetto.imageSrc.length;
  }
  // Passa all'immagine successiva
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.progetto.imageSrc.length;
  }
}
