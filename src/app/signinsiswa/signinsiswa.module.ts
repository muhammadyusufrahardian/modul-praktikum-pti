import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninsiswaPageRoutingModule } from './signinsiswa-routing.module';

import { SigninsiswaPage } from './signinsiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninsiswaPageRoutingModule
  ],
  declarations: [SigninsiswaPage]
})
export class SigninsiswaPageModule {}
