import {
  type Meta,
  type StoryObj,
  moduleMetadata,
  argsToTemplate,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TableModule, TableComponent, TableRowDirective } from './index';
import { PaginationModule } from '../pagination/pagination.module';
import { ButtonModule } from '../button';
import { generateRandomData, TABLE_OPTIONS } from './testing/helpers';

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
    options: TABLE_OPTIONS,
  },
};

export const Pagination: Story = {
  args: {
    limit: 5,
    paginator: true,
    data: generateRandomData(20) as any[],
    options: TABLE_OPTIONS,
  },
};

export const CustomColumns: Story = {
  args: {
    limit: 5,
    paginator: true,
    data: generateRandomData(20) as any[],
    options: {
      columns: {
        ...TABLE_OPTIONS.columns,
        dateOfBirth: {
          title: 'Date',
        },
        actions: {
          title: 'Actions',
        },
      },
      body: {
        ...TABLE_OPTIONS.body,
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
