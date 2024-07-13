import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
/*
* E' qui che implemento i tre componenti principali
*/
@Component({
    selector: 'app-profilo',
    standalone: true,
    templateUrl: './profilo.component.html',
    styleUrl: './profilo.component.css',
    imports: [HeaderComponent, ContentComponent, FooterComponent]
})
export class ProfiloComponent {

}
