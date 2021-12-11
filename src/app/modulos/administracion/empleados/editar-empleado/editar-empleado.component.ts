import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
id:string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
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
    private servicioEmpleado: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarEmpleado();
  }

  BuscarEmpleado(){
    this.servicioEmpleado.ObtenerEmpleadoPorId(this.id).subscribe((datos: ModeloEmpleado) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["edad"].setValue(datos.edad);
      this.fgValidador.controls["fechaNacimiento"].setValue(datos.fechaNacimiento);
      this.fgValidador.controls["sueldo"].setValue(datos.sueldo);
      this.fgValidador.controls["esDirectivo"].setValue(datos.esDirectivo);
      this.fgValidador.controls["empresaId"].setValue(datos.empresaId);
    });
  }

  EditarEmpleado(){
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
    p.id = this.id;
    this.servicioEmpleado.ActualizarEmpleado(p).subscribe((datos: ModeloEmpleado) => {
      alert("Empleado Actualizado");
      this.router.navigate(["/administracion/listar-empleado"]);
    }, (error: any) => {
      alert ("Error actualizando al empleado");
    })
  }

}
