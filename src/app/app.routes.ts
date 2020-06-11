import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { VeiculoComponent } from './veiculo/veiculo.component';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';


export const APP_ROUTES: Routes = [
  { path: '', component: VeiculoComponent},
  { path: 'update/', component: UpdateVeiculoComponent}
];


export class AppRoutingModule { }
