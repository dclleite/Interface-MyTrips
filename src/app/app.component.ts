import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Cidade } from 'src/model/cidade';
import { Hotel } from 'src/model/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cidades: Cidade[];
  hoteis: Hotel[];

  constructor(private dataService: DataService){}

  ngOnInit(){
    return this.dataService.getCidades().subscribe(data => this.cidades = data);
    
  }
}
