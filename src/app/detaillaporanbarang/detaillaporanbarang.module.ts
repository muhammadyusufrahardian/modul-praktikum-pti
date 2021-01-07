import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaillaporanbarangPageRoutingModule } from './detaillaporanbarang-routing.module';

import { DetaillaporanbarangPage } from './detaillaporanbarang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaillaporanbarangPageRoutingModule
  ],
  declarations: [DetaillaporanbarangPage]
})
export class DetaillaporanbarangPageModule {}
