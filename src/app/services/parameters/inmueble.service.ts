import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { UploadedFile } from 'src/app/models/parameters/uploaded-file.model';
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

  SearchRecord(id: string): Observable<InmuebleModel> {
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
        videoUrl: data.videoUrl,
        foto_principal: data.foto_principal
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
      }, 
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }
  

  RemoveRecord(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/inmuebles/${id}`, 
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }


  UploadMainPhoto(form: FormData): Observable<UploadedFile> {
    return this.http.post<UploadedFile>(
      `${this.url}/CargarImagenPrincipalInmueble`,
      form,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

}
