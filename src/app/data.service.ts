import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/model/cidade';
import { Hotel } from 'src/model/hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cidadeApiUrl = 'http://177.105.34.165/MyTrips/MyTrips/Cidade';
  hotelApiUrl = 'http://177.105.34.165/MyTrips/MyTrips/Hotel'

  constructor(private _http: HttpClient) { }

  getCidades(){
    return this._http.get<Cidade[]>(this.cidadeApiUrl);
  }

  getHoteis(){
    return this._http.get<Hotel[]>(this.hotelApiUrl);
  }
}
