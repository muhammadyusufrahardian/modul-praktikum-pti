import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormtugasguruPageRoutingModule } from './formtugasguru-routing.module';

import { FormtugasguruPage } from './formtugasguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormtugasguruPageRoutingModule
  ],
  declarations: [FormtugasguruPage]
})
export class FormtugasguruPageModule {}
