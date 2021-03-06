import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './containers/info.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MaterialModule
  ]
})
export class InfoModule { }
