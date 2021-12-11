import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';
  filter: string = `?filter={"include":[{"relation": "inmueble"}, {"relation": "usuario"}]}`;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.url}/solicitudes${this.filter}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }

  SearchRecord(id: string): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }

  SaveRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.post<SolicitudModel>(
      `${this.url}/solicitudes`,
      {
        usuarioId: this.localStorageService.GetSessionInfo().usuario?.id,
        inmuebleId: data.inmuebleId,
        estado: data.estado,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.put<SolicitudModel>(
      `${this.url}/solicitudes/${data.id}`,
      {
        usuarioId: this.localStorageService.GetSessionInfo().usuario?.id,
        inmuebleId: data.inmuebleId,
        estado: data.estado,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
