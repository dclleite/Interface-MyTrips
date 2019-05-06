import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Cidade } from 'src/model/cidade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cidades : Cidade[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getCidades().subscribe(data => this.cidades = data);
  }

}
