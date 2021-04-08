import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DeviceFlipPage } from 'src/app/flip/device-flip/device-flip.page';


@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  goToFlipPage() {
    this.router.navigateByUrl('device-flip');
  }

  async openFlipModal() {
    const modal = await this.modalController.create({
      component: DeviceFlipPage,
      cssClass: 'flip-modal'
    });
    await modal.present();
  }

}
