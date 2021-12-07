import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEmpleadoComponent } from './buscar-empleado.component';

describe('BuscarEmpleadoComponent', () => {
  let component: BuscarEmpleadoComponent;
  let fixture: ComponentFixture<BuscarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
