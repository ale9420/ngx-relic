import { type Meta, type StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TableModule, TableComponent, TableRowDirective } from './index';
import { PaginationModule } from '../pagination/pagination.module';
import { argsToTemplate } from '@storybook/angular';
import { ButtonComponent, ButtonModule } from '../button';

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
  dateOfBirth: Date;
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
      dateOfBirth: getRandomDate(new Date(1950, 0, 1), new Date(2005, 0, 1)),
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
      declarations: [TableComponent, TableRowDirective],
      imports: [CommonModule, PaginationModule, ButtonModule],
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

export const Basic: Story = {
  args: {
    paginator: false,
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

export const Pagination: Story = {
  args: {
    limit: 5,
    paginator: true,
    data: generateRandomData(20) as any[],
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

export const CustomColumns: Story = {
  args: {
    limit: 5,
    paginator: true,
    data: generateRandomData(20) as any[],
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
        dateOfBirth: {
          title: 'Date',
        },
        actions: {
          title: 'Actions',
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
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      decorators: [
        moduleMetadata({
          declarations: [TableComponent],
          imports: [CommonModule, TableModule, PaginationModule, ButtonModule],
        }),
      ],
      template: `
         <ngx-table ${argsToTemplate(args)}>
           <ng-template appTableRow="dateOfBirth" let-row>
             {{row.dateOfBirth | date}}
           </ng-template>
           <ng-template appTableRow="actions" let-row>
            <ngx-button icon="edit" [outline]="true" />
            <ngx-button class="ml-1" icon="delete" color="danger" />
           </ng-template>
        </ngx-table>
              `,
    };
  },
};
