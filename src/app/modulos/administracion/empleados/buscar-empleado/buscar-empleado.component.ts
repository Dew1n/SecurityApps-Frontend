import { Component, OnInit } from '@angular/core';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {

  listadoEmpleados: ModeloEmpleado[] = [];
  constructor(private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.ObtenerListadoEmpleado();
  }

  ObtenerListadoEmpleado(){
    this.empleadoServicio.ObtenerEmpleados().subscribe((datos: ModeloEmpleado[]) => {
      this.listadoEmpleados = datos;
    })
  }
}
