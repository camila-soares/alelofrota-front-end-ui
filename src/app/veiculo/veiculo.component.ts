import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormGroup, } from '@angular/forms';
import { format } from 'url';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
veiculos: Array<any>;
veiculo: any;
id: number;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.veiculo = {};

    this.service.listar()
    .subscribe((resposta) => {
      console.log(resposta)
      this.veiculos = (resposta)
    
    }
    );
   
  }

  criar(frm: FormGroup) {
    this.service.criar(this.veiculo)
      .subscribe((resposta) => { 
      alert("Veiculo cadastrado com sucesso");
      console.log(resposta)
      this.veiculos.push(resposta);
      frm.reset();
      this.load();
      this.service.listar();
    }, errors => {
      if(errors.status == 400){
        alert("existe campos obrigatórios vázio")
      }
    });
    
}


updateVeiculo(id: number) {
  this.router.navigate(['', id]);
 }

 

 delete(id: number) {
  this.service.dleteVeiculo(id).subscribe(resposta => {
    //confirm("Deseja realmente excluir?")
    alert("Veiculo excluido com sucesso ")
    this.load();
    this.service.listar();
    this.veiculo= resposta
    
  });
}


load() {
  console.log(sessionStorage);
  //Session storage salva os dados como string
  (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
  sessionStorage.refresh = true;
}


 
}
