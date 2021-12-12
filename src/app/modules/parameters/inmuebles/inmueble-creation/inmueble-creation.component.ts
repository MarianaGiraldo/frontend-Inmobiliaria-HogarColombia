   
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { UploadedFile } from 'src/app/models/parameters/uploaded-file.model';
import { InmuebleService } from 'src/app/services/parameters/inmueble.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-inmueble-creation',
  templateUrl: './inmueble-creation.component.html',
  styleUrls: ['./inmueble-creation.component.css']
})
export class InmuebleCreationComponent implements OnInit {

  uploadedPhoto: boolean = false;
  dataForm: FormGroup = new FormGroup({});
  mainPhotoForm: FormGroup = new FormGroup({});
  uploadedFilename?: string = "";
  url_server: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InmuebleService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.FormMainPhoto();
    InitSelect();
  }

  FormMainPhoto() {
    this.mainPhotoForm = this.fb.group({
      file: ["", []]
    });
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      departamento: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      valor: ["", [Validators.required, Validators.min(10000)]],
      tipo: ["", [Validators.required]],
      tipoOferta: ["", [Validators.required]],
      encargado: ["", [Validators.required]],
      encargadoContacto: ["", [Validators.required]],
      videoUrl: ["", [Validators.required]],
      foto_principal: ["", [Validators.required]]
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new InmuebleModel();
      model.departamento = this.GetDF["departamento"].value;
      model.ciudad = this.GetDF["ciudad"].value;
      model.direccion = this.GetDF["direccion"].value;
      model.valor = Number(this.GetDF["valor"].value);
      model.tipo = this.GetDF["tipo"].value;
      model.tipoOferta = this.GetDF["tipoOferta"].value;
      model.encargado = this.GetDF["encargado"].value;
      model.encargadoContacto = this.GetDF["encargadoContacto"].value;
      model.videoUrl = this.GetDF["videoUrl"].value;
      model.foto_principal = this.GetDF["foto_principal"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: InmuebleModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/inmuebles-list"]);
      }
    });
  }


  // Carga de archivo

  UploadPhoto(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.mainPhotoForm.controls["file"].setValue(file);
    }
  }

  SubmitFileToServer() {
    const form = new FormData();
    form.append("file", this.mainPhotoForm.controls["file"].value)
    this.service.UploadMainPhoto(form).subscribe({
      next: (data: UploadedFile) => {
        this.dataForm.controls["foto_principal"].setValue(data.filename);
        this.uploadedPhoto = true;
        this.uploadedFilename = data.filename
      }
    });
  }

}
