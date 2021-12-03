import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorCreationComponent } from './asesores/asesor-creation/asesor-creation.component';
import { AsesorEditionComponent } from './asesores/asesor-edition/asesor-edition.component';
import { AsesorListComponent } from './asesores/asesor-list/asesor-list.component';
import { RemoveAsesorComponent } from './asesores/remove-asesor/remove-asesor.component';
import { ClienteCreationComponent } from './clientes/cliente-creation/cliente-creation.component';
import { ClienteEditionComponent } from './clientes/cliente-edition/cliente-edition.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { RemoveClienteComponent } from './clientes/remove-cliente/remove-cliente.component';
import { InmuebleCreationComponent } from './inmuebles/inmueble-creation/inmueble-creation.component';
import { InmuebleEditionComponent } from './inmuebles/inmueble-edition/inmueble-edition.component';
import { InmuebleListComponent } from './inmuebles/inmueble-list/inmueble-list.component';
import { RemoveInmuebleComponent } from './inmuebles/remove-inmueble/remove-inmueble.component';

const routes: Routes = [
  {
    path:"inmueble-creation",
    component: InmuebleCreationComponent
  },
  {
    path:"inmueble-edition",
    component: InmuebleEditionComponent
  },
  {
    path:"inmuebles-list",
    component: InmuebleListComponent
  },
  {
    path:"remove-inmueble",
    component: RemoveInmuebleComponent
  },
  {
    path:"asesor-creation",
    component: AsesorCreationComponent
  },
  {
    path:"asesor-edition",
    component: AsesorEditionComponent
  },
  {
    path:"asesores-list",
    component: AsesorListComponent
  },
  {
    path:"remove-asesor",
    component: RemoveAsesorComponent
  },
  {
    path:"cliente-creation",
    component: ClienteCreationComponent
  },
  {
    path:"cliente-edition",
    component: ClienteEditionComponent
  },
  {
    path:"clientes-list",
    component: ClienteListComponent
  },
  {
    path:"remove-cliente",
    component: RemoveClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
