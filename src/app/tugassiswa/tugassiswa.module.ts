import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TugassiswaPageRoutingModule } from './tugassiswa-routing.module';

import { TugassiswaPage } from './tugassiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TugassiswaPageRoutingModule
  ],
  declarations: [TugassiswaPage]
})
export class TugassiswaPageModule {}
