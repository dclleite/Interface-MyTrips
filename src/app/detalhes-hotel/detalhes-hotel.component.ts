import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/model/hotel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detalhes-hotel',
  templateUrl: './detalhes-hotel.component.html',
  styleUrls: ['./detalhes-hotel.component.css']
})
export class DetalhesHotelComponent implements OnInit {

  hoteis: Hotel[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getHoteis().subscribe(data => this.hoteis = data);
  }

}
