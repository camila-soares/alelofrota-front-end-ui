import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  APP_ROUTES, AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    UpdateVeiculoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
