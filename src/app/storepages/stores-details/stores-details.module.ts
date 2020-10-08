import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoresDetailsPageRoutingModule } from './stores-details-routing.module';

import { StoresDetailsPage } from './stores-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoresDetailsPageRoutingModule
  ],
  declarations: [StoresDetailsPage]
})
export class StoresDetailsPageModule {}
