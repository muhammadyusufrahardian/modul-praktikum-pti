import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginsiswaPageRoutingModule } from './loginsiswa-routing.module';

import { LoginsiswaPage } from './loginsiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginsiswaPageRoutingModule
  ],
  declarations: [LoginsiswaPage]
})
export class LoginsiswaPageModule {}
