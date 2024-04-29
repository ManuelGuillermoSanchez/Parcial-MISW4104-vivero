/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from '../plant';
import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../services/plant.service';

describe('PlantListComponent', () => {
 let component: PlantListComponent;
 let fixture: ComponentFixture<PlantListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule,],
     declarations: [ PlantListComponent ],
     providers: [ PlantService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
  fixture = TestBed.createComponent(PlantListComponent);
  component = fixture.componentInstance;

  // Crear un listado de 3 plantas con datos mock utilizando faker
  component.plants = [
    {
      id: faker.datatype.number(),
      nombre_comun: faker.lorem.word(),
      nombre_cientifico: faker.lorem.word(),
      tipo: 'Interior',
      clima: 'Templado, cálido',
      altura_maxima: faker.datatype.number(),
      sustrato_siembra: faker.lorem.words()
    },
    {
      id: faker.datatype.number(),
      nombre_comun: faker.lorem.word(),
      nombre_cientifico: faker.lorem.word(),
      tipo: 'Exterior',
      clima: 'Fresco',
      altura_maxima: faker.datatype.number(),
      sustrato_siembra: faker.lorem.words()
    },
    {
      id: faker.datatype.number(),
      nombre_comun: faker.lorem.word(),
      nombre_cientifico: faker.lorem.word(),
      tipo: 'Interior',
      clima: 'Húmedo',
      altura_maxima: faker.datatype.number(),
      sustrato_siembra: faker.lorem.words()
    }
  ];

  // Iniciar la detección de cambios para que la vista refleje los datos mock
  fixture.detectChanges();

  debug = fixture.debugElement;
});

// ... (las pruebas existentes)

it('should create a table with three rows plus header', () => {
  // Espera que haya un elemento 'table'
  const table = debug.query(By.css('table'));
  expect(table).toBeTruthy();

  // Dentro del 'tbody', espera que haya exactamente 3 filas de plantas, además del encabezado
  const rows = table.queryAll(By.css('tbody tr'));
  expect(rows.length).toBe(3); // 3 filas para las plantas
});



});