import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { CadastroHotelComponent } from '../cadastro-hotel/cadastro-hotel.component';
import { Hotel } from 'src/model/hotel';
import { Cidade } from 'src/model/cidade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-hotel-parte-dois',
  templateUrl: './cadastro-hotel-parte-dois.component.html',
  styleUrls: ['./cadastro-hotel-parte-dois.component.css'],
  providers: [NgbRatingConfig]
})
export class CadastroHotelParteDoisComponent implements OnInit {

  hotelForm = new Hotel();
  cidade = new Cidade();
  id: number;

  public imgGarbage = require("../../imagens/garbage.svg");
  public imgPencil = require("../../imagens/pencil-striped-symbol-for-interface-edit-buttons.svg");

  constructor(private dataService : DataService,config: NgbRatingConfig, private route:ActivatedRoute) { 
    config.max = 5;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
      this.dataService.getCidadeId(this.id).subscribe(c => { 
        this.hotelForm.IdCidade = c.Id;
        this.cidade = c;
        console.log("teste" + this.cidade.Nome);
      })
  }

  concluirCadastro(){
    this.dataService.insertHotel(this.hotelForm).subscribe(h =>{
      console.log(h);
    })
  }

}
