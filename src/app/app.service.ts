import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class AppService {
    codigo: number;
    veiculoUrl = 'http://localhost:8080/veiculo';

  
    constructor(private http: HttpClient) { }

    getVeiculo(codigo: number): Observable<any> {
      return this.http.get(`${this.veiculoUrl}`);
    }
  
    listar() {
      return this.http.get<Array<any>>(this.veiculoUrl);
    }
  
    updateVeiculo(codigo: number, veiculo:any): Observable<object>{
      return this.http.put(`${this.veiculoUrl}/${codigo}`, veiculo);
    }
  
    dleteVeiculo(codigo){
      return this.http.delete<Array<any>>(this.veiculoUrl+'/'+`${codigo}`)
    }
  
    criar(veiculo: any) {
      return this.http.post(this.veiculoUrl, veiculo);
    }
}