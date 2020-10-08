import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresDetailsPage } from './stores-details.page';

const routes: Routes = [
  {
    path: '',
    component: StoresDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresDetailsPageRoutingModule {}
