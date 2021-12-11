import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpleado } from '../modelos/empleado.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'http://localhost:3000';
  token: String = '';
  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObternerToken();
  }

  ObtenerEmpleados(): Observable<ModeloEmpleado[]>{
    return this.http.get<ModeloEmpleado[]>(`${this.url}/empleados`);
  }
  ObtenerEmpleadoPorId(id: string): Observable<ModeloEmpleado>{
    return this.http.get<ModeloEmpleado>(`${this.url}/empleados/${id}`);
  }

  CrearEmpleado(empleado: ModeloEmpleado): Observable<ModeloEmpleado>{
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`, empleado,{
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarEmpleado(empleado: ModeloEmpleado): Observable<ModeloEmpleado>{
    return this.http.put<ModeloEmpleado>(`${this.url}/empleados/${empleado.id}`, empleado,{
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarEmpleado(id: string): Observable<any>{
    return this.http.delete(`${this.url}/empleados/${id}`,{
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.token}`
      })
    })
  }
}
