import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
//import { EmpresaComponent } from './empresa/empresa.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
import { EliminarEmpresaComponent } from './empresa/eliminar-empresa/eliminar-empresa.component';
import { BuscarEmpresaComponent } from './empresa/buscar-empresa/buscar-empresa.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   //EmpresaComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    EliminarEmpresaComponent,
    BuscarEmpresaComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EliminarEmpleadoComponent,
    BuscarEmpleadoComponent,
    CrearClienteComponent,
    EliminarClienteComponent,
    EditarClienteComponent,
    BuscarClienteComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdministracionModule { }
