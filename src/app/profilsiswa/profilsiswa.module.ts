import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilsiswaPageRoutingModule } from './profilsiswa-routing.module';

import { ProfilsiswaPage } from './profilsiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilsiswaPageRoutingModule
  ],
  declarations: [ProfilsiswaPage]
})
export class ProfilsiswaPageModule {}
