import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path:"inmueble-edition/:id",
    component: InmuebleEditionComponent
  },
  {
    path:"inmuebles-list",
    component: InmuebleListComponent
  },
  {
    path:"remove-inmueble/:id",
    component: RemoveInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
