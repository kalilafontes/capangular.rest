import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarrosService } from './services/carros/carros.service';
import { CarrosComponent } from './components/carros/carros/carros.component';
import { DadosCarroComponent } from './components/dadosCarro/dados-carro/dados-carro.component';
import { DateReferenciaPipe } from './shared/pipes/dateReferencia/date-referencia.pipe';
import { SepararPalavrasPipe } from './shared/pipes/separarPalavras/separar-palavras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    DadosCarroComponent,
    DateReferenciaPipe,
    SepararPalavrasPipe
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
