import { Component, OnInit } from '@angular/core';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';


@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  listadoClientes: ModeloCliente[] = [];
  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.ObtenerListadoCliente();
  }

  ObtenerListadoCliente(){
    this.clienteServicio.ObtenerClientes().subscribe((datos: ModeloCliente[]) => {
      this.listadoClientes = datos;
    })
  }

}
