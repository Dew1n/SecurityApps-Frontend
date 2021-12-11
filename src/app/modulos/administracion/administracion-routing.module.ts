import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
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
    component: BuscarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-empresa',
    component: CrearEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-empresa/:id',
    component: EditarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-empresa/:id',
    component: EliminarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-empresa',
    component: BuscarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-empleado',
    component: BuscarEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-empleado',
    component: CrearEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-empleado/:id',
    component: EditarEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-empleado/:id',
    component: EliminarEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-empleado',
    component: BuscarEmpleadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-cliente',
    component: BuscarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-cliente/:id',
    component: EditarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-cliente/:id',
    component: EliminarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
