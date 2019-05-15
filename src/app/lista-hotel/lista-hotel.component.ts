import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/model/hotel';
import { DataService } from '../data.service';
import { HeaderComponent } from '../header/header.component';
import { MatDialog } from '@angular/material';
import { DialogDetalhesHotelComponent } from '../dialog-detalhes-hotel/dialog-detalhes-hotel.component';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-hotel',
  templateUrl: './lista-hotel.component.html',
  styleUrls: ['./lista-hotel.component.css']
})
export class ListaHotelComponent implements OnInit {

  hoteis: Hotel[];
  
  constructor(private dataService: DataService, public dialog: MatDialog, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  openDialog(hotel: Hotel): void {
    let dialogRef = this.dialog.open(DialogDetalhesHotelComponent, { 
      data: {
        Nome: hotel.Nome,
        Imagem: hotel.Imagem,
        Classificacao: hotel.Classificacao,
        Descricao: hotel.Descricao
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    HeaderComponent.emitirIdCidade.subscribe(
      idCidade => this.dataService.getHoteisPorIdCidade(idCidade).subscribe(
        data => this.hoteis = data
      )
    );
  } 

}
