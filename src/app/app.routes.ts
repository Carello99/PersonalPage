import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiloComponent } from './componenti/profilo/profilo.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';

export const routes: Routes = [
    { path: '', component: ProfiloComponent },
    { path: 'contatti', component: ContattiComponent },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }