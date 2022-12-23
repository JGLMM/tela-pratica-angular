import { unidadeNegocio } from './unidade-negocio/unidade-negocio.component';
import { cicloComponent } from './ciclo/ciclo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrenteEstrategicaComponent } from './frente-estrategica/frente-estrategica.component';
import { DetFrenteEstrategicaComponent } from './det-frente-estrategica/det-frente-estrategica.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GridCicloComponent } from './ciclo/grid-ciclo/grid-ciclo.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    cicloComponent,
    unidadeNegocio,
    FrenteEstrategicaComponent,
    DetFrenteEstrategicaComponent,
    HomeComponent,
    GridCicloComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
