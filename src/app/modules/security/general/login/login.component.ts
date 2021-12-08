import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SessionDataModel } from 'src/app/models/security/session-data.model';
import { UserCredentialsModel } from 'src/app/models/security/user-credentials.model';
import { SecurityService } from 'src/app/services/shared/security.service';
import {MD5} from 'crypto-js';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) 
  {}

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          // Validators.email,
          Validators.minLength(ConfigurationData.EMAIL_MIN_LENGHT),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(ConfigurationData.PASSWORD_MIN_LENGHT),
        ],
      ],
    });
  }

  Login() {
    if (this.dataForm.invalid) {
      ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
    } else {
      ShowGeneralMessage(ConfigurationData.VALID_FORM_MESSAGE);
      let credentials = new UserCredentialsModel();
      credentials.username = this.GetDF['username'].value;
      credentials.password = MD5(this.GetDF['password'].value).toString();
      this.securityService.Login(credentials).subscribe({
        next: (data: SessionDataModel) => {
          console.log(data);
          if (data.tk != '' && data.usuario != null) {
            let saved = this.localStorageService.SaveSessionData(data);
            data.isLoggedIn = true;
            this.securityService.RefreshSessionInfo(data);
            this.router.navigate(['/home']);
          } else {
            ShowGeneralMessage(ConfigurationData.LOGIN_DATA_INVALID);
          }
        },
        error: (error: any) => {
          console.log(error.message)
        },
        complete: () => {},
      });
    }
  }
  get GetDF() {
    return this.dataForm.controls;
  }
}
