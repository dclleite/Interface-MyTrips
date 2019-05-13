import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-hotel-parte-dois',
  templateUrl: './cadastro-hotel-parte-dois.component.html',
  styleUrls: ['./cadastro-hotel-parte-dois.component.css'],
  providers: [NgbRatingConfig]
})
export class CadastroHotelParteDoisComponent implements OnInit {

  public imgGarbage = require("../../imagens/garbage.svg");
  public imgPencil = require("../../imagens/pencil-striped-symbol-for-interface-edit-buttons.svg");
  constructor() { }

  ngOnInit() {
  }

}
