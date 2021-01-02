import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofilesiswaPageRoutingModule } from './editprofilesiswa-routing.module';

import { EditprofilesiswaPage } from './editprofilesiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofilesiswaPageRoutingModule
  ],
  declarations: [EditprofilesiswaPage]
})
export class EditprofilesiswaPageModule {}
