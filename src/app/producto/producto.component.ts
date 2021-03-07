import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../servicio/producto.service';
import {FormControl} from '@angular/forms';
import {  Producto } from '../servicio/producto';

@Component({
  selector: 'app-Producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  nombre: FormControl = new FormControl('')
  detalle: FormControl = new FormControl('')
  precio: FormControl = new FormControl('')
  Productos:  Producto[] = []
  id = ''

  constructor(public _productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos()
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
   } else{
    this._productoService.updateProducto(this.id,nombre,detalle,precio)
       .subscribe(() => { 
        this.getProductos()
        this.id=''
        this.nombre.setValue("")
        this.detalle.setValue("")
        this.precio.setValue("") })
   }
}

deleteProducto(id:string):void {
  this._productoService.deleteProducto(id).subscribe( res => {
    console.log(res)
    this.getProductos()  
  });
}

getProducto(id:string):void {
this._productoService.getProducto(id).subscribe(response => {
   console.log(response)
   this.nombre.setValue(response.nombre)
   this.detalle.setValue(response.detalle)
   this.precio.setValue(response.precio)
   this.id = response.id
})
}
updateProducto(): void{
  console.log('hola')
}

}