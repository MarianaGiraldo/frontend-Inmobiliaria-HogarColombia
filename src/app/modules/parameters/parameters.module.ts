import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { InmuebleCreationComponent } from './inmuebles/inmueble-creation/inmueble-creation.component';
import { InmuebleEditionComponent } from './inmuebles/inmueble-edition/inmueble-edition.component';
import { InmuebleListComponent } from './inmuebles/inmueble-list/inmueble-list.component';
import { RemoveInmuebleComponent } from './inmuebles/remove-inmueble/remove-inmueble.component';
import { InmueblePhotosComponent } from './inmuebles/inmueble-photos/inmueble-photos.component';
import { AsesorCreationComponent } from './asesores/asesor-creation/asesor-creation.component';
import { AsesorEditionComponent } from './asesores/asesor-edition/asesor-edition.component';
import { AsesorListComponent } from './asesores/asesor-list/asesor-list.component';
import { RemoveAsesorComponent } from './asesores/remove-asesor/remove-asesor.component';
import { ClienteCreationComponent } from './clientes/cliente-creation/cliente-creation.component';
import { ClienteEditionComponent } from './clientes/cliente-edition/cliente-edition.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { RemoveClienteComponent } from './clientes/remove-cliente/remove-cliente.component';

@NgModule({
  declarations: [
    InmuebleCreationComponent,
    InmuebleEditionComponent,
    InmuebleListComponent,
    RemoveInmuebleComponent,
    InmueblePhotosComponent,
    AsesorCreationComponent,
    AsesorEditionComponent,
    AsesorListComponent,
    RemoveAsesorComponent,
    ClienteCreationComponent,
    ClienteEditionComponent,
    ClienteListComponent,
    RemoveClienteComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
