import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { InmuebleService } from 'src/app/services/parameters/inmueble.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-inmueble',
  templateUrl: './remove-inmueble.component.html',
  styleUrls: ['./remove-inmueble.component.css'],
})
export class RemoveInmuebleComponent implements OnInit {
  id: string = '';
  datos = new InmuebleModel();

  constructor(
    private router: Router,
    private service: InmuebleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    this.id = this.route.snapshot.params['id'];
    this.service.SearchRecord(this.id).subscribe({
      next: (data: InmuebleModel) => {
        if (
          data.id &&
          data.departamento &&
          data.ciudad &&
          data.direccion &&
          data.valor &&
          data.tipo &&
          data.tipoOferta &&
          data.encargado &&
          data.encargadoContacto &&
          data.videoUrl
        ) {
          this.id = data.id;
          this.datos = data;
        }
      },
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (_data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(['/parameters/inmuebles-list']);
      },
    });
  }
}
