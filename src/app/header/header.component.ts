import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Cidade } from 'src/model/cidade';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cidades : Cidade[];
  selected : number;
  id = 0;
  static emitirIdCidade = new EventEmitter<string>();

  cidadeSelecionada(event){
    HeaderComponent.emitirIdCidade.emit(event);
    this.id = event;
  }

  public placeholderIcon = require("../../imagens/placeholder.svg");
  public calendarIcon = require("../../imagens/calendar-page-empty.svg");
  public manUserIcon = require("../../imagens/man-user.svg");
  public crownIcon = require("../../imagens/crown.svg");
  public creditCardIcon = require("../../imagens/credit-card.svg");

  date = new FormControl(new Date());

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getCidade().subscribe(data => this.cidades = data);
  }



}

