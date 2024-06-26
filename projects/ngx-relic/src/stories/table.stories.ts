import { type Meta, type StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TableModule, TableComponent } from '../lib/table';
import { PaginationModule } from '../lib/pagination/pagination.module';
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
  return data;
}

const table: Meta<TableModule> = {
  title: 'Data/Table',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current paginated page from the table',
    },
    limit: {
      control: 'number',
      description: 'Limit of items displayed per page',
    },
    data: {
      description: 'Array of objects to display in the table',
      control: 'array',
    },
    options: {
      control: 'object',
      description:
        'This object allow you to configure header and body properties',
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
          align: 'center',
        },
        lastName: {
          title: 'Last name',
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
      },
    },
  },
};
