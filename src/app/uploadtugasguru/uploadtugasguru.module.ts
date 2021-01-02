import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadtugasguruPageRoutingModule } from './uploadtugasguru-routing.module';

import { UploadtugasguruPage } from './uploadtugasguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadtugasguruPageRoutingModule
  ],
  declarations: [UploadtugasguruPage]
})
export class UploadtugasguruPageModule {}
