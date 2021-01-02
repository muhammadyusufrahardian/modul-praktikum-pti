import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihangandasiswaPageRoutingModule } from './pilihangandasiswa-routing.module';

import { PilihangandasiswaPage } from './pilihangandasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihangandasiswaPageRoutingModule
  ],
  declarations: [PilihangandasiswaPage]
})
export class PilihangandasiswaPageModule {}
