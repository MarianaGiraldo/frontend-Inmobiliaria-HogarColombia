import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudCreationComponent } from './solicitud-creation/solicitud-creation.component';
import { SolicitudEditionComponent } from './solicitud-edition/solicitud-edition.component';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { RemoveSolicitudComponent } from './remove-solicitud/remove-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SolicitudCreationComponent,
    SolicitudEditionComponent,
    SolicitudListComponent,
    RemoveSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudesModule { }
