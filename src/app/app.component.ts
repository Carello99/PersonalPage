import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfiloComponent } from "./componenti/profilo/profilo.component";
/*
* Qiuesta pagina si suddivide in tre parti essenzioni: il profilo (intestazione della pagina),
* il content (il corpo della pagina contenente i progetti), e il footer.
* Sono tutti e tre racchiusi in profilo.component.
* Se volessi aggiungere pagine lo potrei fare tranquillamente da qui.
*/
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProfiloComponent]
})
export class AppComponent {
  title = 'personal-page';
}
