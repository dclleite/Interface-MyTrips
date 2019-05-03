import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/model/cidade';
import { Hotel } from 'src/model/hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cidadeApiUrl = 'http://localhost/MyTrips/MyTrips/Cidade';
  hotelApiUrl = 'http://localhost/MyTrips/MyTrips/Hotel'

  constructor(private _http: HttpClient) { }

  getCidades(){
    return this._http.get<Cidade[]>(this.cidadeApiUrl);
  }

  getHoteis(){
    return this._http.get<Hotel[]>(this.hotelApiUrl);
  }
}
