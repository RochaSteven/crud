import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
 URL = "http://127.0.0.1:8000/api/productos";




  constructor(private _http :HttpClient) { }

getProductos(): Observable<Producto[]> {
    return this._http.get<Producto[]>(this.URL);
}

addProducto(nombre:string, detalle:string, precio:string): Observable<any>{
    let obj = new FormData()
    obj.append("nombre",nombre)
    obj.append("detalle", detalle)
    obj.append("precio", precio)
    return this._http.post(this.URL, obj )
}

deleteProducto(id:string):Observable<any>{
    return this._http.delete(this.URL+'/'+id)
}

getProducto(id:string):Observable<Producto>{
  return this._http.get<Producto>(this.URL+'/'+id)
}

updateProducto(id:string, nombre:string, detalle:string, precio:string):Observable<Producto[]>{
   let obj = new FormData()
   obj.append("id" ,id)
   obj.append("nombre",nombre)
   obj.append("detalle", detalle)
   obj.append("precio", precio)
  let direccion = this.URL + '/'+id ;
  return this._http.put<Producto[]>(direccion,obj)
}

}


