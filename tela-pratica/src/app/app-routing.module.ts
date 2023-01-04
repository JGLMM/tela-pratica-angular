import { unidadeNegocio } from './unidade-negocio/unidade-negocio.component';
import { DetFrenteEstrategicaComponent } from './det-frente-estrategica/det-frente-estrategica.component';
import { FrenteEstrategicaComponent } from './frente-estrategica/frente-estrategica.component';
import { HomeComponent } from './home/home.component';
import { cicloComponent } from './ciclo/ciclo.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'ciclo', component: cicloComponent},
  {path: 'home', component: HomeComponent},
  {path: 'frente-estrategica', component: FrenteEstrategicaComponent},
  {path: 'detalhamento-frente-estrategica', component: DetFrenteEstrategicaComponent},
  {path: 'unidade-negocio', component: unidadeNegocio}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
