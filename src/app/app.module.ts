import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarrosService } from './services/carros/carros.service';
import { CarrosComponent } from './components/carros/carros/carros.component';
import { DadosCarroComponent } from './components/dadosCarro/dados-carro/dados-carro.component';
import { ValorPipe } from './shared/pipes/valor/valor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    DadosCarroComponent,
    ValorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
