import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { InmuebleCreationComponent } from './inmuebles/inmueble-creation/inmueble-creation.component';
import { InmuebleEditionComponent } from './inmuebles/inmueble-edition/inmueble-edition.component';
import { InmuebleListComponent } from './inmuebles/inmueble-list/inmueble-list.component';
import { RemoveInmuebleComponent } from './inmuebles/remove-inmueble/remove-inmueble.component';
import { InmueblePhotosComponent } from './inmuebles/inmueble-photos/inmueble-photos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    InmuebleCreationComponent,
    InmuebleEditionComponent,
    InmuebleListComponent,
    RemoveInmuebleComponent,
    InmueblePhotosComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ParametersModule { }
