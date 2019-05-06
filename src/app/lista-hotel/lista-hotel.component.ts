import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/model/hotel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista-hotel',
  templateUrl: './lista-hotel.component.html',
  styleUrls: ['./lista-hotel.component.css']
})
export class ListaHotelComponent implements OnInit {

  hoteis: Hotel[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getHoteis().subscribe(data => this.hoteis = data);
  }

}
