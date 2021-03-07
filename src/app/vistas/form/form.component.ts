import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../../servicio/producto.service';
import {FormControl} from '@angular/forms';
import {  Producto } from '../../servicio/producto';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nombre: FormControl = new FormControl('')
  detalle: FormControl = new FormControl('')
  precio: FormControl = new FormControl('')
  Productos:  Producto[] = []
  id = ''
  constructor(public _productoService: ProductoService) { }

  ngOnInit(): void {
  }
  getProductos(){
    this._productoService.getProductos().subscribe( response => {
      return  this.Productos = response   
    })
  }
  addProducto():void {
    let nombre = this.nombre.value;
    let detalle = this.detalle.value;
    let precio = this.precio.value;
   if(this.id === ''){
      this._productoService.addProducto(nombre, detalle,precio).subscribe(() => { 
        this.getProductos()
        this.nombre.setValue("")
        this.detalle.setValue("")
        this.precio.setValue("") })
   } 
}
}
