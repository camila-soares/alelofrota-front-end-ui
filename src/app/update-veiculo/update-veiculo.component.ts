import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-veiculo',
  templateUrl: './update-veiculo.component.html',
  styleUrls: ['./update-veiculo.component.css']
})
export class UpdateVeiculoComponent implements OnInit {
  
  id: number;
  veiculo: Veiculo;

  constructor(private service: AppService, route:  ActivatedRoute ,private router: Router,) { }

  ngOnInit() {
    this.veiculo = new Veiculo();
    
    this.service.getVeiculo(this.id).subscribe(resposta => {
      console.log(resposta)
      this.veiculo = resposta;
    }, error => console.log(error));
  }

  update(){
    this.service.updateVeiculo(this.id, this.veiculo).subscribe(resposta =>{
      console.log(resposta), error => console.log(error);
      this.veiculo = new Veiculo();
      this.gotoList();
    })

  }
  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['']);
  }

}
