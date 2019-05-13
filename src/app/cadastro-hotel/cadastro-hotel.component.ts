import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Hotel } from 'src/model/hotel';
import { Cidade } from 'src/model/cidade';

@Component({
  selector: 'app-cadastro-hotel',
  templateUrl: './cadastro-hotel.component.html',
  styleUrls: ['./cadastro-hotel.component.css']
})
export class CadastroHotelComponent implements OnInit {

  hoteis : Hotel[];
  cidades : Cidade[];
  public imgGarbage = require("../../imagens/garbage.svg");
  public imgPencilStriped = require("../../imagens/pencil-striped.svg");
  public imgPlaceholder = require("../../imagens/placeholder.svg");
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.geHoteis().subscribe(data => this.hoteis = data);
    this.dataService.getCidade().subscribe(data => this.cidades = data);
  }

  deletarhotel(id){
    this.dataService.deleteHotel(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })

    

  }

}
