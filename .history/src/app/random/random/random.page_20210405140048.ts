import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToFlipPage() {
    this.router.navigateByUrl('device-flip');
  }

}
