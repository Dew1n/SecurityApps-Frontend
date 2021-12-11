import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

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
    'empresaId': ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarCliente();
  }

  BuscarCliente(){
    this.servicioCliente.ObtenerClientePorId(this.id).subscribe((datos: ModeloCliente) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["edad"].setValue(datos.edad);
      this.fgValidador.controls["fechaNacimiento"].setValue(datos.fechaNacimiento);
      this.fgValidador.controls["empresaId"].setValue(datos.empresaId);
    });
  }

  EditarCliente(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let email = this.fgValidador.controls["email"].value;
    let edad = parseInt(this.fgValidador.controls["edad"].value);
    let fechaNacimiento= this.fgValidador.controls["fechaNacimiento"].value;
    let empresaId = this.fgValidador.controls["empresaId"].value;
    let p = new ModeloCliente();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.telefono = telefono;
    p.direccion = direccion;
    p.email = email;
    p.edad = edad;
    p.fechaNacimiento = fechaNacimiento;
    p.empresaId = empresaId;

    p.id = this.id;
    this.servicioCliente.ActualizarCliente(p).subscribe((datos: ModeloCliente) => {
      alert("Cliente Actualizado");
      this.router.navigate(["/administracion/listar-cliente"]);
    }, (error: any) => {
      alert ("Error actualizando al cliente");
    })
  }


}
