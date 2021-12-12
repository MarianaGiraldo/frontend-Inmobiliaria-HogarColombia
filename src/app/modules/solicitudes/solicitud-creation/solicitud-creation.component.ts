import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { InmuebleService } from 'src/app/services/parameters/inmueble.service';
import { SolicitudService } from 'src/app/services/solicitudes/solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-solicitud-creation',
  templateUrl: './solicitud-creation.component.html',
  styleUrls: ['./solicitud-creation.component.css']
})
export class SolicitudCreationComponent implements OnInit {

  constructor(
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService
  ) { }

  ngOnInit(): void {
  }

  SaveRecord(){
    let model = new SolicitudModel();
      model.inmuebleId = this.route.snapshot.params['inmuebleId'];
      model.estado = "enviado";
    this.service.SaveRecord(model).subscribe({
      next: (_data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/solicitudes/solicitudes-list"]);
      }
    });
  }

}