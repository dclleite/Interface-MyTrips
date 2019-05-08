import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-detalhes-hotel',
  templateUrl: './dialog-detalhes-hotel.component.html',
  styleUrls: ['./dialog-detalhes-hotel.component.css']
})
export class DialogDetalhesHotelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDetalhesHotelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
       
    }

    public imgLeftArrow = require("../../imagens/left-arrow.svg");
  ngOnInit() {
  }

}
