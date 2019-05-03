import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/model/cidade';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cidadeApiUrl = 'http://localhost/MyTrips/MyTrips/Cidade';

  constructor(private _http: HttpClient) { }

  getCidade(){
    return this._http.get<Cidade[]>(this.cidadeApiUrl);
  }
}
