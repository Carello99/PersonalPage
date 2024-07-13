import { Component } from '@angular/core';
import * as infoData from '../../../../assets/json/info.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Carico i dati necessari dal file info.json

  info: any;

  ngOnInit(): void {
    this.info = (infoData as any).default;
  }
}
