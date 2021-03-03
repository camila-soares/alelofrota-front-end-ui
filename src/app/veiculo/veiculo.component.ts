import * as core from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Veiculo } from '../veiculo';
@core.Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements core.OnInit {
private veiculos: Array<any> = [];
_veiculo: Veiculo[] = [];
paginaAtual : Number = 1 ;
contador : Number = 10;
veiculo: any;
id: number;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
   // this.pageVeiculo(0, 10);
    this.veiculo = [];

    this.service.listar()
    .subscribe(res => {
      this.veiculos = res;
      console.log(this.veiculos)
      error => console.log('Erro service' + error
      )
    
    }
    );
   
  }

//   criar(frm: FormGroup) {
//     this.service.criar(this.veiculo)
//       .subscribe((resposta) => { 
//       alert("Veiculo cadastrado com sucesso");
//       console.log(resposta)
//       this.veiculos.push(resposta);
//       frm.reset();
//       this.load();
//       this.service.listar();
//     }, errors => {
//       if(errors.status == 400){
//         alert("existe campos obrigatórios vázio")
//       }
//     });
    
// }


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

pageVeiculo(page, size){
  this.service.getVeiculoPage(page, size).subscribe(res => {
    this._veiculo = res.content;
  })
}

load() {
  console.log(sessionStorage);
  //Session storage salva os dados como string
  (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
  sessionStorage.refresh = true;
}


 
}
