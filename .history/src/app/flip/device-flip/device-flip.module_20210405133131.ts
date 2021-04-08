import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceFlipPageRoutingModule } from './device-flip-routing.module';

import { DeviceFlipPage } from './device-flip.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceFlipPageRoutingModule
  ],
  providers: [
    ScreenOrientation
  ],
  declarations: [DeviceFlipPage]
})
export class DeviceFlipPageModule {}
