import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-device-flip',
  templateUrl: './device-flip.page.html',
  styleUrls: ['./device-flip.page.scss'],
})
export class DeviceFlipPage implements OnInit {

  constructor(
    private screenOrientation: ScreenOrientation
  ) { }

  ngOnInit() {
  }

  flipIt() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

}
