import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrosComponent } from './components/carros/carros/carros.component';
import { DadosCarroComponent } from './components/dadosCarro/dados-carro/dados-carro.component';

const routes: Routes = [
  { path: 'carros', component: CarrosComponent },
  { path: 'dados-carros', component: DadosCarroComponent },
  { path: '', redirectTo: '/dados-carros', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
