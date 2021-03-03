import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Veiculo } from '../veiculo';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-incluir-veiculo',
  templateUrl: './incluir-veiculo.component.html',
  styleUrls: ['./incluir-veiculo.component.css']
})
export class IncluirVeiculoComponent implements OnInit {
  veiculoForm: FormGroup;
  _veiculo: Veiculo = new Veiculo;
  paginaAtual : Number = 1 ;
  contador : Number = 5;
  id: number;
  submitted = false;
  
  constructor(private fb: FormBuilder, private service: AppService, private router: Router) { }

  ngOnInit() {
    this.veiculoForm = this.fb.group({
      plate: [''],
      model: [''],
      manufacturer: [''],
      color: [''],
      status: [''], 
    })
  }


  onSubmit() {
    this.submitted = true;
   this.service.createVeiculo(this.veiculoForm.value).subscribe(res => {
     console.log("RRRRR", res);
   })
  }

 
    
}


