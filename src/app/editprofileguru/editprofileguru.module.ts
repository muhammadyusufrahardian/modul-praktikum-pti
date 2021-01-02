import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofileguruPageRoutingModule } from './editprofileguru-routing.module';

import { EditprofileguruPage } from './editprofileguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofileguruPageRoutingModule
  ],
  declarations: [EditprofileguruPage]
})
export class EditprofileguruPageModule {}
