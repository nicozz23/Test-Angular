import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { MostrarimgComponent } from './mostrarimg/mostrarimg.component';
import { Img1Component } from './img1/img1.component';
import { Img2Component } from './img2/img2.component';
import { Img3Component } from './img3/img3.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Img4Component } from './img4/img4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    MostrarimgComponent,
    Img1Component,
    Img2Component,
    Img3Component,
    BienvenidaComponent,
    NavegadorComponent,
    Img4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
