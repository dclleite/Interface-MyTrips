import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/model/cidade';
import { Hotel } from 'src/model/hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Api = '/mytripsApi/MyTrips/';


  constructor(private _http: HttpClient) { }

  getCidade(){
    return this._http.get<Cidade[]>(this.Api + 'Cidade');
  }
  getCidadeId(id){
    return this._http.get<Cidade>(this.Api + "Cidade/" + id);
  }

  insertCidade(cidade : Cidade){
    return this._http.post<Cidade>(this.Api + "Cidade", cidade);
  }
  deleteCidade(id){
    return this._http.delete<Cidade>(this.Api + "Cidade/Delete/" + id);
  }

  updateCidade(cidade : Cidade){
    return this._http.put<Cidade>(this.Api + "Cidade", cidade);
  }
//-----------------------------------------------------------------------
  geHoteis(){
    return this._http.get<Hotel[]>(this.Api + 'Hotel');
  }
  getHoteisPorIdCidade(id){
    return this._http.get<Hotel[]>(this.Api + 'Hotel/GetHotelByIdCidade?idCidade=' + id);
  }
  getHotelId(id){
    return this._http.get<Hotel>(this.Api + "Hotel/" + id);
  }
  insertHotel(hotel : Hotel){
    return this._http.post<Hotel>(this.Api + "Hotel", hotel);
  }
  deleteHotel(id){
    return this._http.delete<Hotel>(this.Api + "Hotel/Delete/" + id);
  }
  updateHotel(hotel : Hotel){
    return this._http.put<Cidade>(this.Api + "Hotel", hotel);
  }


}
