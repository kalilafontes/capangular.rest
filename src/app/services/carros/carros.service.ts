import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Modelo } from 'src/app/models/modelo.model';
import { Marcas } from 'src/app/models/marcas.model';
import { Valor } from 'src/app/models/valor.model';
import { Anos } from 'src/app/models/anos.model';


const apiURL = "https://parallelum.com.br/fipe/api/v1"
@Injectable()
export class CarrosService {

  constructor(private http:HttpClient) { }

  getAllMarcas(): Observable<Marcas> {
    return this.http.get<Marcas>(apiURL + "/carros/marcas");
  }

  getModelos(id:string): Observable<Modelo> {
    let result = this.http.get<Modelo>(apiURL + "/carros/marcas/"+id+"/modelos");
    return result;
  }

  getAno(id:string, idmodelo:string): Observable<Anos> {
    let result = this.http.get<Anos>(apiURL + "/carros/marcas/"+id+"/modelos/"+idmodelo+"/anos");
    return result;
  }

  getValor(id:string, idModelo:string, idAno:string): Observable<Valor> {
    return this.http.get<Valor>(apiURL + "/carros/marcas/"+id+"/modelos/"+idModelo+"/anos/"+idAno)
  }
}
