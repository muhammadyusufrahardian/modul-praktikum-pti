import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihangandaPageRoutingModule } from './pilihanganda-routing.module';

import { PilihangandaPage } from './pilihanganda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihangandaPageRoutingModule
  ],
  declarations: [PilihangandaPage]
})
export class PilihangandaPageModule {}
