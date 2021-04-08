import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.scss'],
})
export class FlipComponent implements OnInit {

  constructor(
    private screenOrientation: ScreenOrientation,
    private router: Router
  ) { }

  ngOnInit() {}

  flipIt() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  flipBack() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  back() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT).then(() => {
      this.router.navigateByUrl('random');
    })
  }

}
