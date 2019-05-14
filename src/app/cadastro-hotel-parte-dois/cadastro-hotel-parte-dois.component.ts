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
  status: boolean;
  statusReadonly : boolean;

  public imgGarbage = require("../../imagens/garbage.svg");
  public imgPencil = require("../../imagens/pencil-striped-symbol-for-interface-edit-buttons.svg");

  constructor(private dataService : DataService,config: NgbRatingConfig, private route:ActivatedRoute) { 
    config.max = 5;
  }

  ngOnInit() {
    this.statusReadonly = false;
    this.status = this.route.snapshot.data[0]['status'];
    this.id = this.route.snapshot.params['id'];
    if (this.status) {
      this.dataService.getCidadeId(this.id).subscribe(c => {
        this.hotelForm.IdCidade = c.Id;
        this.hotelForm.NomeCidade = c.Nome;
        this.hotelForm.PaisCidade = c.Pais;
      });
    }else if(!status){
      this.dataService.getHotelId(this.id).subscribe(h => {
        this.hotelForm = h;
      })
    }
  }

  concluirCadastro(){
    if (this.hotelForm.Id == 0) {
      this.dataService.insertHotel(this.hotelForm).subscribe();
    }else{
      this.dataService.updateHotel(this.hotelForm).subscribe();
    }
    this.statusReadonly = true;
  }

  habilitaReadonly(){
    this.statusReadonly = false;
  }
}
