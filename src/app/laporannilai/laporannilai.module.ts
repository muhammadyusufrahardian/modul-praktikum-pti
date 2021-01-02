import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporannilaiPageRoutingModule } from './laporannilai-routing.module';

import { LaporannilaiPage } from './laporannilai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporannilaiPageRoutingModule
  ],
  declarations: [LaporannilaiPage]
})
export class LaporannilaiPageModule {}
