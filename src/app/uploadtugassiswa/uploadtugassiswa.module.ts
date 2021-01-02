import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadtugassiswaPageRoutingModule } from './uploadtugassiswa-routing.module';

import { UploadtugassiswaPage } from './uploadtugassiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadtugassiswaPageRoutingModule
  ],
  declarations: [UploadtugassiswaPage]
})
export class UploadtugassiswaPageModule {}
