import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionDataModel } from 'src/app/models/security/session-data.model';
import { ConfigurationData } from '../../config/ConfigurationData';
import { UserCredentialsModel } from '../../models/security/user-credentials.model';
// import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  sessionInfoSubject: BehaviorSubject<SessionDataModel> = new BehaviorSubject<SessionDataModel>(new SessionDataModel());
  url: string = ConfigurationData.SECURITY_MS_URL;

  constructor(
    private http: HttpClient){}
    // private localStorageService: LocalStorageService) {
    //   this.VerifyActiveSession();
    // }

  // VerifyActiveSession(): boolean {
  //   let info = this.localStorageService.GetSessionInfo();
  //   if (info.tk) {
  //     info.isLoggedIn = true;
  //     this.RefreshSessionInfo(info);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // RefreshSessionInfo(data: SessionDataModel){
  //   this.sessionInfoSubject.next(data);
  // }

  // GetSessionInfo(){
  //   return this.sessionInfoSubject.asObservable();
  // }

  Login(data: UserCredentialsModel): Observable<SessionDataModel> {
    return this.http.post<SessionDataModel>(`${this.url}/identificar-usuario`, {
      usuario: data.username,
      contrasena: data.password
    });
  }

}
