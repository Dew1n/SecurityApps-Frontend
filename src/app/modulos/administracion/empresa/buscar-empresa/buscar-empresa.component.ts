import { Component, OnInit } from '@angular/core';
import { ModeloEmpresa } from 'src/app/modelos/empresa.modelo';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {

listadoRegistros: ModeloEmpresa[] = [];

  constructor(private empresaServicio: EmpresaService) { }

  ngOnInit(): void {
    this.ListadoEmpresa();
  }
  ListadoEmpresa(){
    this.empresaServicio.ObtenerReistros().subscribe((datos: ModeloEmpresa[]) => {
      this.listadoRegistros = datos;
    })
  }

}
