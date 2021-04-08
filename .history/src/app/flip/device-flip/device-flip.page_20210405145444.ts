import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-device-flip',
  templateUrl: './device-flip.page.html',
  styleUrls: ['./device-flip.page.scss'],
})
export class DeviceFlipPage implements OnInit {

  constructor(
    private screenOrientation: ScreenOrientation,
    private router: Router
  ) { }

  ngOnInit() {
  }

  flipIt() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  flipBack() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  back() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.router.navigateByUrl('random');
  }

}
