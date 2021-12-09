import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { InmuebleService } from 'src/app/services/parameters/inmueble.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-inmueble-edition',
  templateUrl: './inmueble-edition.component.html',
  styleUrls: ['./inmueble-edition.component.css']
})
export class InmuebleEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InmuebleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
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

  SearchRecord(){
    let id = this.route.snapshot.params["id"]
    this.service.SearchRecord(id).subscribe({
      next: (data: InmuebleModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["departamento"].setValue(data.departamento);
        this.GetDF["ciudad"].setValue(data.ciudad);
        this.GetDF["direccion"].setValue(data.direccion);
        this.GetDF["valor"].setValue(data.valor);
        this.GetDF["tipo"].setValue(data.tipo);
        this.GetDF["tipoOferta"].setValue(data.tipoOferta);
        this.GetDF["encargado"].setValue(data.encargado);
        this.GetDF["encargadoContacto"].setValue(data.encargadoContacto);
        this.GetDF["videoUrl"].setValue(data.videoUrl);
      }
    })
  }

  SaveRecord(){
    let model = new InmuebleModel();
      model.id = this.GetDF["id"].value
      model.departamento = this.GetDF["departamento"].value;
      model.ciudad = this.GetDF["ciudad"].value;
      model.direccion = this.GetDF["direccion"].value;
      model.valor = Number(this.GetDF["valor"].value);
      model.tipo = this.GetDF["tipo"].value;
      model.tipoOferta = this.GetDF["tipoOferta"].value;
      model.encargado = this.GetDF["encargado"].value;
      model.encargadoContacto = this.GetDF["encargadoContacto"].value;
      model.videoUrl = this.GetDF["videoUrl"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: InmuebleModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/inmuebles-list"]);
      }
    });
  }

}
