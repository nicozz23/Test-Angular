import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { MostrarimgComponent } from './mostrarimg/mostrarimg.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'mostrarimg', component: MostrarimgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
