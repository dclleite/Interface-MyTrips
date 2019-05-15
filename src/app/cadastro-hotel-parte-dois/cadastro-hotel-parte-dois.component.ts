import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Hotel } from 'src/model/hotel';
import { Cidade } from 'src/model/cidade';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';


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
  cadastroSucesso: boolean;

  public imgPlaceholder = require("../../imagens/placeholder.svg");
  public imgGarbage = require("../../imagens/garbage(2).svg");
  public imgPencil = require("../../imagens/pencil-striped-symbol-for-interface-edit-buttons.svg");

  constructor(private dataService : DataService,config: NgbRatingConfig, private route:ActivatedRoute,
     private router: Router) { 
        config.max = 5;
    
  }

  ngOnInit() {
    this.statusReadonly = false;
    this.cadastroSucesso = false;
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

  deletarhotel(id){
    this.dataService.deleteHotel(id).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/Cadastro-Hotel']);
  }


  concluirCadastro(form: NgForm){
  
    if(form.valid){
      if (this.hotelForm.Id == 0) {
        this.dataService.insertHotel(this.hotelForm).subscribe();
      }else{
        this.dataService.updateHotel(this.hotelForm).subscribe();
      }
      this.statusReadonly = true;
      this.cadastroSucesso = true;
    }else{
      
    }

  }

  habilitaReadonly(){
    this.statusReadonly = false;
  }
}
