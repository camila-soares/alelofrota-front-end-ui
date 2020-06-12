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
  routes: any;

  constructor(private service: AppService, private route:  ActivatedRoute ,private router: Router,) { }

  ngOnInit() {
    this.veiculo = new Veiculo();
    this.id = this.route.snapshot.params['id']; 

    this.service.getVeiculo(this.id).subscribe(resposta => {
      console.log(resposta)
      this.veiculo = resposta;
    }, error => console.log(error));
  }

  onSubmit() {
    this.service.updateVeiculo(this.id, this.veiculo).subscribe(
      resposta =>{
      console.log(resposta), error => console.log(error);
      this.veiculo = new Veiculo();
      this.gotoList();
    }, error => {
      alert(error);
      
    }); 
  }

  gotoList() {
    this.router.navigate(['']);
  }

}
