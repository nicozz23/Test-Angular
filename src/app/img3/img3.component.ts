import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-img3',
  templateUrl: './img3.component.html',
  styleUrls: ['./img3.component.css']
})
export class Img3Component  implements OnInit  {

  constructor(private sanitizer: DomSanitizer) { }

  imagenUrl: any;
  ngOnInit() {
    this.imagenUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/angular2.jpg');

    console.log("En este instante el componente ha cargado");
  }
}



