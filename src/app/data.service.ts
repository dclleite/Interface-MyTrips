import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/model/cidade';
import { Hotel } from 'src/model/hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Api = 'http://localhost/MyTrips/MyTrips/';

  constructor(private _http: HttpClient) { }

  getCidade(){
    return this._http.get<Cidade[]>(this.Api + 'Cidade');
  }

  insertCidade(cidade : Cidade){
    return this._http.post<Cidade>(this.Api + "Cidade", cidade);
  }
  deleteCidade(id){
    return this._http.delete<Cidade>(this.Api + "Cidade/" + id);
  }

  getHoteisPorIdCidade(id){
    return this._http.get<Hotel[]>(this.Api + 'Hotel?idCidade=' + id);
  }


}
