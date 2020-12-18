import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';
import { Anos } from 'src/app/models/anos.model';
import { Marcas } from 'src/app/models/marcas.model';
import { Modelo } from 'src/app/models/modelo.model';
import { Valor } from 'src/app/models/valor.model';
import { CarrosService } from 'src/app/services/carros/carros.service';

@Component({
  selector: 'app-dados-carro',
  templateUrl: './dados-carro.component.html',
 // styleUrls: ['./dados-carro.component.css'],
  styleUrls: ['../../../app.component.css']
  
})
export class DadosCarroComponent implements OnInit {
  carro:Marcas = {};
  modelo:Modelo[]= [];
  modelos:Modelo = {};
  carroList:Marcas[]= [];
  modeloList:Modelo[]= [];
  anoList:Anos[]=[];
  valorList:Valor={};
  valorall:Valor[] = [];
  valoresCompleto:Valor[] = [];

  listaModelo:Marcas[]= [];

  idModelo:any;
  idAno:any;
  
  error:boolean = false;
  errorMessage:string = "";
  carroSelecionado:string = "";

  constructor(private service:CarrosService) {
    this.carroList.push(this.carro);
    this.modelo.push({});
    this.carroList.map( carro => {
      console.log(carro.nome);

      this.modeloList.map(modelo => {
        console.log(modelo.codigo)
      });
    });
  }

  ngOnInit(): void {
    this.service.getAllMarcas()
      .subscribe((response:any)=>{
        this.carroList = response;
      })
      
    this.service.getAllMarcas()
    .subscribe((response:any)=>{
      this.carroList = response;
      
      this.carroList.map(result =>{
        
       
      });   

    });

  }

  onSubmit(form:NgForm){
    //console.log(form.value);
    this.valorall = [];
    this.service.getModelos(form.value.codigo)
    .subscribe((response:any)=>{
      this.modeloList = response.modelos; 
      this.anoList = response.anos;          
      console.log(response);
      this.modeloList.map( codigo => {
        console.log(codigo);
        this.idModelo = codigo.codigo; 

        this.anoList.map( codigo => {
          console.log(codigo.codigo);
          this.idAno = codigo.codigo;   
          let url = this.service.getValor(form.value.codigo, this.idModelo, this.idAno )   
          if(url){
            this.service.getValor(form.value.codigo, this.idModelo, this.idAno )          
          .subscribe((res:any)=>{
               
            console.log(res);
            this.valorList = res;
            this.valorall.push(res);
            
            if(res){
              this.valoresCompleto = this.valorall;
              console.log(this.valoresCompleto)
            }
            
          });
          }       
    
          
        });       
        
      });
      });      
      
  }

}
