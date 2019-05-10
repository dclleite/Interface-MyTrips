import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Cidade } from 'src/model/cidade';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {

  cidades : Cidade[];
  cidadeForm : Cidade = new Cidade();
  
  constructor(private dataService: DataService) { }

  public imgPlus = require("../../imagens/plus.svg");
  public imgGarbage = require("../../imagens/garbage.svg");
  public imgPencilStriped = require("../../imagens/pencil-striped.svg");

  ngOnInit() {
    this.dataService.getCidade().subscribe(data => this.cidades = data);
  }

  cadastarCidade(){
    
    this.dataService.insertCidade(this.cidadeForm).subscribe(data => {
      this.ngOnInit();
    });

    
  }

}
