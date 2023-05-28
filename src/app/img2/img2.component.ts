import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-img2',
  templateUrl: './img2.component.html',
  styleUrls: ['./img2.component.css']
})
export class Img2Component implements OnInit  {
  constructor(private sanitizer: DomSanitizer) { }

  imagenUrl: any;
  ngOnInit() {
    this.imagenUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/caracteristicas.png');

    console.log("En este instante el componente ha cargado");
  }
}
