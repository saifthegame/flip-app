import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-device-flip',
  templateUrl: './device-flip.page.html',
  styleUrls: ['./device-flip.page.scss'],
})
export class DeviceFlipPage implements OnInit {

  constructor(
    private screenOrientation: ScreenOrientation,
    private router: Router,
    private modalController
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
    this.modalController.dismiss();
    this.screenOrientation.unlock();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT).then(() => {
      this.router.navigateByUrl('random');
    })
  }

}
