import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitudes/solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-solicitud-edition',
  templateUrl: './solicitud-edition.component.html',
  styleUrls: ['./solicitud-edition.component.css']
})
export class SolicitudEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  id: string = "";
  datos = new SolicitudModel();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      estado: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    this.id = this.route.snapshot.params["id"]
    this.service.SearchRecord(this.id).subscribe({
      next: (data: SolicitudModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["estado"].setValue(data.estado);
        this.datos = data
      }
    })
  }

  SaveRecord(){
    let model = new SolicitudModel();
      model.id = this.id;
      model.inmuebleId = this.datos.inmuebleId
      model.clienteId = this.datos.clienteId;
      model.estado = this.GetDF["estado"].value;
    this.service.EditRecord(model).subscribe({
      next: (_data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/solicitudes/solicitudes-list"]);
      }
    });
  }

}

