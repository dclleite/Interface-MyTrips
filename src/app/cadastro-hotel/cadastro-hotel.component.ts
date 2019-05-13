import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Hotel } from 'src/model/hotel';

@Component({
  selector: 'app-cadastro-hotel',
  templateUrl: './cadastro-hotel.component.html',
  styleUrls: ['./cadastro-hotel.component.css']
})
export class CadastroHotelComponent implements OnInit {

  hoteis : Hotel[];
  public imgGarbage = require("../../imagens/garbage.svg");
  public imgPencilStriped = require("../../imagens/pencil-striped.svg");
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.geHoteis().subscribe(data => this.hoteis = data);
  }

}
