import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-detalhes-hotel',
  templateUrl: './dialog-detalhes-hotel.component.html',
  providers: [NgbRatingConfig],
  styleUrls: ['./dialog-detalhes-hotel.component.css']
})
export class DialogDetalhesHotelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDetalhesHotelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, config: NgbRatingConfig) { 
      config.max = 5;
      config.readonly = true;
    }

    public imgLeftArrow = require("../../imagens/left-arrow.svg");
  ngOnInit() {
  }

}
