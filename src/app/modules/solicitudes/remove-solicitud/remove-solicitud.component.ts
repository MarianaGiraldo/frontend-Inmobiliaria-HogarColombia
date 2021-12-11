import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitudes/solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-solicitud',
  templateUrl: './remove-solicitud.component.html',
  styleUrls: ['./remove-solicitud.component.css']
})
export class RemoveSolicitudComponent implements OnInit {
  id: string = '';
  datos = new SolicitudModel();

  constructor(
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    this.id = this.route.snapshot.params['id'];
    this.service.SearchRecord(this.id).subscribe({
      next: (data: SolicitudModel) => {
        if (
          data.id &&
          data.usuarioId &&
          data.inmuebleId &&
          data.estado
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
        this.router.navigate(['/solicitudes/solicitudes-list']);
      },
    });
  }
}

