import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { PaginationModule } from '../pagination';
import { TableRowDirective } from './table-row.directive';

type Data = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  dateOfBirth: Date;
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

function getRandomElement(array: Array<any>) {
  return array[getRandomInt(0, array.length - 1)];
}

function generateRandomData(count: number): Data[] {
  const firstNames = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];
  const lastNames = ['Pérez', 'García', 'Rodríguez', 'López', 'Martínez'];
  const cities = ['Bogota', 'Cali', 'Medellin', 'Cucuta', 'Barranquilla'];

  let data = [];

  for (let i = 0; i < count; i++) {
    let person = {
      id: i + 1,
      firstName: getRandomElement(firstNames),
      lastName: getRandomElement(lastNames),
      age: getRandomInt(18, 70),
      city: getRandomElement(cities),
      dateOfBirth: getRandomDate(new Date(1950, 0, 1), new Date(2005, 0, 1)),
    };
    data.push(person);
  }
  return data;
}

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent, TableRowDirective],
      imports: [PaginationModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = generateRandomData(10);
    component.options = {
      columns: {
        firstName: {
          title: 'First name',
          width: '100px',
          align: 'left',
        },
        lastName: {
          title: 'Last name',
          align: 'left',
          width: '100px',
        },
        age: {
          title: 'Age',
        },
        city: {
          title: 'City',
        },
      },
      body: {
        firstName: {
          align: 'left',
        },
        lastName: {
          align: 'left',
        },
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
