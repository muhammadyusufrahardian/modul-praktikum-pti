import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwasiswaPageRoutingModule } from './jadwasiswa-routing.module';

import { JadwasiswaPage } from './jadwasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwasiswaPageRoutingModule
  ],
  declarations: [JadwasiswaPage]
})
export class JadwasiswaPageModule {}
