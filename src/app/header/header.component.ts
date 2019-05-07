import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Cidade } from 'src/model/cidade';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cidades : Cidade[];
  static emitirIdCidade = new EventEmitter<string>();

  cidadeSelecionada(event){
    HeaderComponent.emitirIdCidade.emit(event);
  }

  public placeholderIcon = require("./icones-filtros/placeholder.svg");
  public calendarIcon = require("./icones-filtros/calendar-page-empty.svg");
  public manUserIcon = require("./icones-filtros/man-user.svg");
  public crownIcon = require("./icones-filtros/crown.svg");
  public creditCardIcon = require("./icones-filtros/credit-card.svg");

  date = new FormControl(new Date());

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCidades().subscribe(data => this.cidades = data);
  }



}

