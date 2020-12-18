import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CarrosService } from 'src/app/services/carros/carros.service';
import { Marcas } from 'src/app/models/marcas.model';
import { Modelo } from 'src/app/models/modelo.model';



@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
 // styleUrls: ['./carros.component.css']
 styleUrls: ['../../../app.component.css']
})
export class CarrosComponent implements OnInit {

  carro:Marcas={};
  carroList:Marcas[] = [];
  modelo:Modelo={};
  modelos:Modelo[]=[];
  codigo:number = 0;

  constructor(private service:CarrosService) {
    this.modelos.push({})
    this.modelo.codigo
   }

  getAll(){
    this.service.getAllMarcas();
    console.log(this.service);
  }

  getModel(){
    console.log(this.codigo)
  } 
  ngOnInit(): void {
    this.service.getAllMarcas()
      .subscribe((response:any)=>{
        this.carroList = response;
        console.log(this.carroList);  
         
      })

  }

}
