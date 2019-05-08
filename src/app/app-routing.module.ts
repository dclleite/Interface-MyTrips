import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { ListaHotelComponent } from './lista-hotel/lista-hotel.component';

const routes: Routes = [
  { path: '', component: ListaHotelComponent },
  { path: 'Home', component: ListaHotelComponent },
  { path: 'cadastroCidade', component: CadastroCidadeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
