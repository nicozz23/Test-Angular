import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  nombres: string[] = [];
  nuevoNombre: string = '';

  agregarNombre() {
    if (this.nuevoNombre.trim() !== '') {
      this.nombres.push(this.nuevoNombre);
      this.nuevoNombre = '';
    }
    else{
      alert("Ingresa un nombre correcto")  
    }
  }
  editarNombre(index: number) {
    const nombreEditado = prompt('Ingrese el nuevo nombre');
    if (nombreEditado && nombreEditado.trim() !== '') {
      this.nombres[index] = nombreEditado;
    }
  }
  eliminarNombre(index: number) {
    this.nombres.splice(index, 1);
  }
  

  
}