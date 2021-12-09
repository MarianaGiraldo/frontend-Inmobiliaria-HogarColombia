import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { InmuebleCreationComponent } from './inmuebles/inmueble-creation/inmueble-creation.component';
import { InmuebleEditionComponent } from './inmuebles/inmueble-edition/inmueble-edition.component';
import { InmuebleListComponent } from './inmuebles/inmueble-list/inmueble-list.component';
import { RemoveInmuebleComponent } from './inmuebles/remove-inmueble/remove-inmueble.component';
import { InmueblePhotosComponent } from './inmuebles/inmueble-photos/inmueble-photos.component';
import { ClienteCreationComponent } from './clientes/cliente-creation/cliente-creation.component';
import { ClienteEditionComponent } from './clientes/cliente-edition/cliente-edition.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { RemoveClienteComponent } from './clientes/remove-cliente/remove-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    InmuebleCreationComponent,
    InmuebleEditionComponent,
    InmuebleListComponent,
    RemoveInmuebleComponent,
    InmueblePhotosComponent,
    ClienteCreationComponent,
    ClienteEditionComponent,
    ClienteListComponent,
    RemoveClienteComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametersModule { }
