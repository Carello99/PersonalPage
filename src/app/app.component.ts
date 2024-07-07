import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfiloComponent } from "./componenti/profilo/profilo.component";
import { ContattiComponent } from "./componenti/contatti/contatti.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProfiloComponent, ContattiComponent]
})
export class AppComponent {
  title = 'personal-page';
}
