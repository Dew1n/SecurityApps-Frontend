import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpresa } from '../modelos/empresa.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = 'http://localhost:3000';
  token: String = '';
  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObternerToken();
  }

  ObtenerReistros(): Observable<ModeloEmpresa[]>{
    return this.http.get<ModeloEmpresa[]>(`${this.url}/empresas`);
  }
  ObtenerReistrosPorId(id: string): Observable<ModeloEmpresa>{
    return this.http.get<ModeloEmpresa>(`${this.url}/empresas/${id}`);
  }

  CrearEmpresa(empresa: ModeloEmpresa): Observable<ModeloEmpresa>{
    return this.http.post<ModeloEmpresa>(`${this.url}/empresas`, empresa,{
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarEmpresa(empresa: ModeloEmpresa): Observable<ModeloEmpresa>{
    return this.http.put<ModeloEmpresa>(`${this.url}/empresas/${empresa.id}`, empresa,{
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarEmpresa(id: string): Observable<any>{
    return this.http.delete<ModeloEmpresa>(`${this.url}/empresas/${id}`,{
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.token}`
      })
    })
  }
}
