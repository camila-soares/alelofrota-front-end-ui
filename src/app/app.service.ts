import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './veiculo';

@Injectable({
    providedIn: 'root'
  })

  export class AppService {
    filtro: string;
    titulo: string;
    id: number;
    veiculoUrl = 'http://localhost:8080/veiculo';

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    constructor(private http: HttpClient) { }

    getVeiculo(id: number): Observable<any> {
      return this.http.get(`${this.veiculoUrl}/${id}`);
    }

    getVeiculoPage(page: number, size:number): Observable<any> {
      return this.http.get(`${this.veiculoUrl}/page=${page}?size${size}`);
    }
  
    listar() {
      return this.http.get<Veiculo[]>(this.veiculoUrl);
    }
  
    updateVeiculo(id: number, veiculo:any): Observable<object>{
      return this.http.put(`${this.veiculoUrl}/${id}`, veiculo);
    }
  
    dleteVeiculo(id){
      return this.http.delete<Array<any>>(this.veiculoUrl+'/'+`${id}`)
    }

    createVeiculo(veiculo): Observable<Veiculo> {  
      return this.http.post<Veiculo>(this.veiculoUrl,  JSON.stringify(veiculo), this.httpOptions);  
    }  

   
}