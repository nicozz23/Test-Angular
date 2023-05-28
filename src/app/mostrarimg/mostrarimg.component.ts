import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mostrarimg',
  templateUrl: './mostrarimg.component.html',
  styleUrls: ['./mostrarimg.component.css']
})
export class MostrarimgComponent {
  imageUrl: string;
  @ViewChild('fileInput') fileInput: ElementRef;
 
  onFileSelected(event: any) {
    const file = event.target.files.item(0);
    this.uploadImage(file);
    
  }
 
  uploadImage(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(file);
  }
 
  
}
