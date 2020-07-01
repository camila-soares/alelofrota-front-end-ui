import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  APP_ROUTES, AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    UpdateVeiculoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    //AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [HttpClientModule, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
