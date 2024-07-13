import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiloComponent } from './componenti/profilo/profilo.component';

export const routes: Routes = [
    { path: '', component: ProfiloComponent },
    //Qui si può implementare una logica con molteplici pagine
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }