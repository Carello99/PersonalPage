import { Component } from '@angular/core';
import * as infoData from '../../../../assets/json/info.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Carico le informazioni dal file info.json per poi poterle mostrare dinamicamente a schermo

  info: any;
  ngOnInit(): void {
    this.info = (infoData as any).default;
  }
}
