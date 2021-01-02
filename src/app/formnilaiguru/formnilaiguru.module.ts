import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormnilaiguruPageRoutingModule } from './formnilaiguru-routing.module';

import { FormnilaiguruPage } from './formnilaiguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormnilaiguruPageRoutingModule
  ],
  declarations: [FormnilaiguruPage]
})
export class FormnilaiguruPageModule {}
