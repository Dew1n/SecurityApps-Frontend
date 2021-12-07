import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { BuscarEmpresaComponent } from './empresa/buscar-empresa/buscar-empresa.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
import { EliminarEmpresaComponent } from './empresa/eliminar-empresa/eliminar-empresa.component';

const routes: Routes = [
  {
    path: 'listar-empresa',
    component: BuscarEmpresaComponent
  },
  {
    path: 'crear-empresa',
    component: CrearEmpresaComponent
  },
  {
    path: 'editar-empresa/:id',
    component: EditarEmpresaComponent
  },
  {
    path: 'eliminar-empresa',
    component: EliminarEmpresaComponent
  },
  {
    path: 'buscar-empresa',
    component: BuscarEmpresaComponent
  },
  {
    path: 'listar-empleado',
    component: BuscarEmpleadoComponent
  },
  {
    path: 'crear-empleado',
    component: CrearEmpleadoComponent
  },
  {
    path: 'editar-empleado/:id',
    component: EditarEmpleadoComponent
  },
  {
    path: 'eliminar-empleado',
    component: EliminarEmpleadoComponent
  },
  {
    path: 'buscar-empleado',
    component: BuscarEmpleadoComponent
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'eliminar-cliente',
    component: EliminarClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
