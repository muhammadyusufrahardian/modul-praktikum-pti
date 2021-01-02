import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardsiswaPageRoutingModule } from './dashboardsiswa-routing.module';

import { DashboardsiswaPage } from './dashboardsiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardsiswaPageRoutingModule
  ],
  declarations: [DashboardsiswaPage]
})
export class DashboardsiswaPageModule {}
