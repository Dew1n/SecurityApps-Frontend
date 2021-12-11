import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpresa } from 'src/app/modelos/empresa.modelo';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-eliminar-empresa',
  templateUrl: './eliminar-empresa.component.html',
  styleUrls: ['./eliminar-empresa.component.css']
})
export class EliminarEmpresaComponent implements OnInit {

  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'razonSocial': ['', [Validators.required]],
    'nit': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioEmpresa: EmpresaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarEmpresa();
  }
  BuscarEmpresa(){
    this.servicioEmpresa.ObtenerReistrosPorId(this.id).subscribe((datos:ModeloEmpresa) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["razonSocial"].setValue(datos.razonSocial);
      this.fgValidador.controls["nit"].setValue(datos.nit);
    });
  }

  EliminarEmpresa(){
    let razonSocial = this.fgValidador.controls["razonSocial"].value;
    let nit = this.fgValidador.controls["nit"].value;
    let p = new ModeloEmpresa();
    p.razonSocial = razonSocial;
    p.nit = nit;
    p.id = this.id;
    this.servicioEmpresa.EliminarEmpresa(p.id).subscribe((datos: ModeloEmpresa) => {
    alert("Empresa Eliminada");
    this.router.navigate(["/administracion/listar-empresa"]);
    }, (error: any) => {
      alert ("Error eliminado la empresa");
    })
  }

}
