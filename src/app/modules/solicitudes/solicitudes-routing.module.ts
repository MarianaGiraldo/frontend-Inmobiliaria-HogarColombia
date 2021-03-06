import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveSolicitudComponent } from './remove-solicitud/remove-solicitud.component';
import { SolicitudCreationComponent } from './solicitud-creation/solicitud-creation.component';
import { SolicitudEditionComponent } from './solicitud-edition/solicitud-edition.component';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';

const routes: Routes = [
  {
    path:"solicitud-creation/:inmuebleId",
    component: SolicitudCreationComponent
  },
  {
    path:"solicitud-edition/:id",
    component: SolicitudEditionComponent
  },
  {
    path:"solicitudes-list",
    component: SolicitudListComponent
  },
  {
    path:"remove-solicitud/:id",
    component: RemoveSolicitudComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
