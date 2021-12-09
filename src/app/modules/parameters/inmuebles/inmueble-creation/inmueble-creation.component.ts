   
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { InmuebleService } from 'src/app/services/parameters/inmueble.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-inmueble-creation',
  templateUrl: './inmueble-creation.component.html',
  styleUrls: ['./inmueble-creation.component.css']
})
export class InmuebleCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InmuebleService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      asesorId: ["", [Validators.required]],
      departamento: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      valor: ["", [Validators.required, Validators.min(10000)]],
      tipo: ["", [Validators.required]],
      tipoOferta: ["", [Validators.required]],
      encargado: ["", [Validators.required]],
      encargadoContacto: ["", [Validators.required]],
      videoUrl: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new InmuebleModel();
      model.asesorId = this.GetDF["asesorId"].value;
      model.departamento = this.GetDF["departamento"].value;
      model.ciudad = this.GetDF["ciudad"].value;
      model.direccion = this.GetDF["direccion"].value;
      model.valor = Number(this.GetDF["valor"].value);
      model.tipo = this.GetDF["tipo"].value;
      model.tipoOferta = this.GetDF["tipoOferta"].value;
      model.encargado = this.GetDF["encargado"].value;
      model.encargadoContacto = this.GetDF["encargadoContacto"].value;
      model.videoUrl = this.GetDF["videoUrl"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: InmuebleModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/inmuebles-list"]);
      }
    });
  }

}
