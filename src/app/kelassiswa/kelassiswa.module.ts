import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KelassiswaPageRoutingModule } from './kelassiswa-routing.module';

import { KelassiswaPage } from './kelassiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KelassiswaPageRoutingModule
  ],
  declarations: [KelassiswaPage]
})
export class KelassiswaPageModule {}
