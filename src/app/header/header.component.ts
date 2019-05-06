import { Component, OnInit } from '@angular/core';
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

  date = new FormControl(new Date());

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCidades().subscribe(data => this.cidades = data);
  }

}
