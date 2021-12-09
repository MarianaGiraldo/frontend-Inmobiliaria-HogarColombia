import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(`${this.url}/inmuebles`);
  }

  SearchRecord(id: number): Observable<InmuebleModel> {
    return this.http.get<InmuebleModel>(`${this.url}/inmuebles/${id}`);
  }

  SaveRecord(data: InmuebleModel): Observable<InmuebleModel> {
    return this.http.post<InmuebleModel>(`${this.url}/inmuebles`,
      {
        id: data.id,
        valor: data.valor
      });
  }

  EditRecord(data: InmuebleModel): Observable<InmuebleModel> {
    return this.http.put<InmuebleModel>(`${this.url}/inmuebles/${data.id}`,
      {
        id: data.id,
        valor: data.valor
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/inmuebles/${id}`);
  }

}
