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
        asesorId: this.localStorageService.GetSessionInfo().usuario?.id,
        departamento: data.departamento,
        ciudad: data.ciudad,
        direccion: data.direccion,
        valor: data.valor,
        tipo: data.tipo,
        tipoOferta: data.tipoOferta ,
        encargado: data.encargado,
        encargadoContacto: data.encargadoContacto,
        videoUrl: data.videoUrl
      }, 
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: InmuebleModel): Observable<InmuebleModel> {
    return this.http.put<InmuebleModel>(`${this.url}/inmuebles/${data.id}`,
      {
        asesorId: data.asesorId,
        departamento: data.departamento,
        ciudad: data.ciudad,
        direccion: data.direccion,
        valor: data.valor,
        tipo: data.tipo,
        tipoOferta: data.tipoOferta ,
        encargado: data.encargado,
        encargadoContacto: data.encargadoContacto,
        videoUrl: data.videoUrl
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/inmuebles/${id}`);
  }

}
