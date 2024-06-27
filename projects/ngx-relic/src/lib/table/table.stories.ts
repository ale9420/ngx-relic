import { type Meta, type StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TableModule, TableComponent } from './index';
import { PaginationModule } from '../pagination/pagination.module';
import { argsToTemplate } from '@storybook/angular';

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

type Data = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  dateOfBirth: string;
};

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
      dateOfBirth: getRandomDate(new Date(1950, 0, 1), new Date(2005, 0, 1))
        .toISOString()
        .split('T')[0],
    };
    data.push(person);
  }
  return data;
}

const table: Meta<TableModule> = {
  title: 'Data/Table',
  component: TableComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [TableComponent],
      imports: [CommonModule, PaginationModule],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
         <ngx-table ${argsToTemplate(args)}>
        </ngx-table>
              `,
    };
  },
};

export default table;

type Story = StoryObj<TableComponent<any[]>>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    limit: 4,
    currentPage: 1,
    data: generateRandomData(10) as any[],
    options: {
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
    },
  },
};
