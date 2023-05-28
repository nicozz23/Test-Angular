import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-img4',
  templateUrl: './img4.component.html',
  styleUrls: ['./img4.component.css']
})
export class Img4Component  implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  imagenUrl: any;
  ngOnInit() {
    this.imagenUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/screen.jpg');

    console.log("En este instante el componente ha cargado");
  }
}



