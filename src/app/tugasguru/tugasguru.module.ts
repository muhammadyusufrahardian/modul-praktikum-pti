import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TugasguruPageRoutingModule } from './tugasguru-routing.module';

import { TugasguruPage } from './tugasguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TugasguruPageRoutingModule
  ],
  declarations: [TugasguruPage]
})
export class TugasguruPageModule {}
