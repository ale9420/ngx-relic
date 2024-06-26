import { type Meta, type StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TableModule, TableComponent } from '../lib/table';
import { PaginationModule } from '../lib/pagination/pagination.module';

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

function generateRandomData(count: number) {
  const firstNames = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];
  const lastNames = ['Pérez', 'García', 'Rodríguez', 'López', 'Martínez'];
  const cities = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza'];

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
  console.log(data);
  return data;
}

const table: Meta<TableModule> = {
  title: 'Data/Table',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
    },
    limit: {
      control: 'number',
    },
    total: {
      control: 'number',
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [TableComponent],
      imports: [CommonModule, PaginationModule],
    }),
  ],
  render: (args) => {
    const { ...props } = args;

    return {
      props: {
        ...props,
        tableData: generateRandomData(10),
        tableOptions: {
          columns: {
            firstName: {
              title: 'Nombre',
            },
            lastName: {
              title: 'Nombre',
            },
            city: {
              title: 'Ciudad',
            },
          },
        },
        permissions: [
          {
            id: 1,
            name: 'Admin',
          },
          {
            id: 2,
            name: 'Comercial',
          },
          {
            id: 3,
            name: 'Mesa de gestion',
          },
        ],
      },
      template: `
         <ngx-table
            [currentPage]="1"
            [limit]="4"
            [total]="10"
            [options]="tableOptions"
            [data]="tableData"
        >
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
    total: 10,
    currentPage: 1,
  },
};
