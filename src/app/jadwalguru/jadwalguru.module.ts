import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalguruPageRoutingModule } from './jadwalguru-routing.module';

import { JadwalguruPage } from './jadwalguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalguruPageRoutingModule
  ],
  declarations: [JadwalguruPage]
})
export class JadwalguruPageModule {}
