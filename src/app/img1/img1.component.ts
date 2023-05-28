import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-img1',
  templateUrl: './img1.component.html',
  styleUrls: ['./img1.component.css']
})
export class Img1Component implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }

  imagenUrl: any;
  ngOnInit() {
    this.imagenUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Angular.png');

    console.log("En este instante el componente ha cargado");
  }
}
