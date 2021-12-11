import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'edad': ['', [Validators.required]],
    'fechaNacimiento': ['', [Validators.required]],
    'empresaId': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioCliente: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let email = this.fgValidador.controls["email"].value;
    let edad = parseInt(this.fgValidador.controls["edad"].value);
    let fechaNacimiento= this.fgValidador.controls["fechaNacimiento"].value;
    let empesaId= this.fgValidador.controls["empresaId"].value;
    let p = new ModeloCliente();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.telefono = telefono;
    p.direccion = direccion;
    p.email = email;
    p.edad = edad;
    p.fechaNacimiento = fechaNacimiento;
    p.empresaId = empesaId;
    this.servicioCliente.CrearCliente(p).subscribe((datos: ModeloCliente) => {
      alert("Cliente Guardado");
      this.router.navigate(["/administracion/listar-cliente"]);
    }, (error: any) => {
      alert ("Error creando al cliente");
    })
  }

}
