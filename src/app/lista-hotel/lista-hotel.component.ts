import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/model/hotel';
import { DataService } from '../data.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-lista-hotel',
  templateUrl: './lista-hotel.component.html',
  styleUrls: ['./lista-hotel.component.css']
})
export class ListaHotelComponent implements OnInit {

  hoteis: Hotel[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    HeaderComponent.emitirIdCidade.subscribe(
      idCidade => this.dataService.getHoteisPorIdCidade(idCidade).subscribe(
        data => this.hoteis = data
      )
    );
  } 

}
