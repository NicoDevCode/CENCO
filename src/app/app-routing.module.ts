import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { DeudasComponent } from './componentes/deudas/deudas.component';
import { DeudoresComponent } from './componentes/deudores/deudores.component';
import { InformesComponent } from './componentes/informes/informes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'deudas', component: DeudasComponent },
  { path: 'deudores', component: DeudoresComponent },
  { path: 'informes', component: InformesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
