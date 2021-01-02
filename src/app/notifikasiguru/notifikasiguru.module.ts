import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifikasiguruPageRoutingModule } from './notifikasiguru-routing.module';

import { NotifikasiguruPage } from './notifikasiguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifikasiguruPageRoutingModule
  ],
  declarations: [NotifikasiguruPage]
})
export class NotifikasiguruPageModule {}
