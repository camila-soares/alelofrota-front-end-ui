import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { Veiculo } from './veiculo';

@Injectable({
    providedIn: 'root'
  })

  export class AppService {
    id: number;
    veiculoUrl = 'http://localhost:8080/veiculo';

  
    constructor(private http: HttpClient) { }

    getVeiculo(id: number): Observable<any> {
      return this.http.get(`${this.veiculoUrl}/${id}`);
    }
  
    listar() {
      return this.http.get<Array<any>>(this.veiculoUrl);
    }
  
    updateVeiculo(id: number, veiculo:any): Observable<object>{
      return this.http.put(`${this.veiculoUrl}/${id}`, veiculo);
    }
  
    dleteVeiculo(id){
      return this.http.delete<Array<any>>(this.veiculoUrl+'/'+`${id}`)
    }
  
    criar(veiculo: any) {
      return this.http.post(this.veiculoUrl, veiculo, {
        observe: 'response',
        responseType: 'text'
      })
    }
}