import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupsiswaPageRoutingModule } from './signupsiswa-routing.module';

import { SignupsiswaPage } from './signupsiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupsiswaPageRoutingModule
  ],
  declarations: [SignupsiswaPage]
})
export class SignupsiswaPageModule {}
