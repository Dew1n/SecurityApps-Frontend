import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'edad': ['', [Validators.required]],
    'fechaNacimiento': ['', [Validators.required]],
    'sueldo': ['', [Validators.required]],
    'esDirectivo': ['', [Validators.required]],
    'empresaId': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarEmpleado(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let email = this.fgValidador.controls["email"].value;
    let edad = parseInt(this.fgValidador.controls["edad"].value);
    let fechaNacimiento= this.fgValidador.controls["fechaNacimiento"].value;
    let sueldo = this.fgValidador.controls["sueldo"].value;
    let esDirectivo = this.fgValidador.controls["esDirectivo"].value;
    let empresaId = this.fgValidador.controls["empresaId"].value;
    let p = new ModeloEmpleado();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.telefono = telefono;
    p.direccion = direccion;
    p.email = email;
    p.edad = edad;
    p.fechaNacimiento = fechaNacimiento;
    p.sueldo = sueldo;
    p.esDirectivo = esDirectivo;
    p.empresaId = empresaId;
    this.servicioEmpleado.CrearEmpleado(p).subscribe((datos: ModeloEmpleado) => {
      alert("Empleado Guardado");
      this.router.navigate(["/administracion/listar-empleado"]);
    }, (error: any) => {
      alert ("Error creando al empleado");
    })
  }

}
