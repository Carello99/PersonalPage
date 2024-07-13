import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import * as progettiData from '../../../../assets/json/progetti.json';
import {ProgettoComponent} from './progetti/progetto.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatCardModule, CommonModule, ProgettoComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
/* 
* Carico le informazioni dal file progetti.json per poi poterle mostrare dinamicamente a schermo
* Con l'utilizzo su html di *ngFor costruisco in modo dinamico tanti 'progetti' per quanti ne ho sul
* file progetti.json. Questo rende tutta la pagina scalabile dal punto di vista del numero di progetti
* che si possono inserire (basta modificare solo il file progetti.json).
*/

  progetti: any[] = [];
  ngOnInit(): void {
    this.progetti = (progettiData as any).default;
  }
}
