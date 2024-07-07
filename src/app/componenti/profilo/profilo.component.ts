import { Component } from '@angular/core';
import { ImmagineDiProfiloComponent } from "./immagine-di-profilo/immagine-di-profilo.component";

@Component({
    selector: 'app-profilo',
    standalone: true,
    templateUrl: './profilo.component.html',
    styleUrl: './profilo.component.css',
    imports: [ImmagineDiProfiloComponent]
})
export class ProfiloComponent {

}
