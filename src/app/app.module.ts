import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatOptionModule,MatDatepickerModule, MatNativeDateModule, MatInputModule, MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { ListaHotelComponent } from './lista-hotel/lista-hotel.component';
import { DialogDetalhesHotelComponent } from './dialog-detalhes-hotel/dialog-detalhes-hotel.component';
import { NgbModule,NgbRating,  } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaHotelComponent,
    DialogDetalhesHotelComponent,
    NavBarComponent,
    CadastroCidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    NgbModule
  ],
  exports:[
    AppComponent
  ],
  entryComponents:[
    DialogDetalhesHotelComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
