import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpresa } from 'src/app/modelos/empresa.modelo';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'razonSocial': ['', [Validators.required]],
    'nit': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioEmpresa: EmpresaService, private router: Router) { }

  ngOnInit(): void {
  }
  GuardarEmpresa(){
    let razonSocial = this.fgValidador.controls["razonSocial"].value;
    let nit = this.fgValidador.controls["nit"].value;
    let p = new ModeloEmpresa();
    p.razonSocial = razonSocial;
    p.nit = nit;
    this.servicioEmpresa.CrearEmpresa(p).subscribe((datos: ModeloEmpresa) => {
      alert("Empresa Guardada");
      this.router.navigate(["/administracion/listar-empresa"]);
    }, (error: any) => {
      alert ("Error creando la empresa");
    })
  }

}
