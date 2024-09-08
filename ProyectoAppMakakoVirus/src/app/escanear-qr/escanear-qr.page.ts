import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQRPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegar(){
    this.router.navigate(['./inicio'])
  }
}
