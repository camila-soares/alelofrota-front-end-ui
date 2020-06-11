import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormGroup, } from '@angular/forms';
import { format } from 'url';
@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
veiculos: Array<any>;
veiculo: any;
codigo: number;

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
      this.service.listar();
    });
}

updateVeiculo(codigo: number) {
  this.router.navigate(['', codigo]);
 }

 

 delete(codigo: number) {
  this.service.dleteVeiculo(codigo).subscribe(resposta => {
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
