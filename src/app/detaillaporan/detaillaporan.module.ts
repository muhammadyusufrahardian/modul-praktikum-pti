import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaillaporanPageRoutingModule } from './detaillaporan-routing.module';

import { DetaillaporanPage } from './detaillaporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaillaporanPageRoutingModule
  ],
  declarations: [DetaillaporanPage]
})
export class DetaillaporanPageModule {}
