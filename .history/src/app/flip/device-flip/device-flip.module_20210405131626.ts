import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceFlipPageRoutingModule } from './device-flip-routing.module';

import { DeviceFlipPage } from './device-flip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceFlipPageRoutingModule
  ],
  declarations: [DeviceFlipPage]
})
export class DeviceFlipPageModule {}
