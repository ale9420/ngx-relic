import { type Meta, type StoryObj } from '@storybook/angular';
import { TagComponent, TagModule } from '../lib/tag';

const tag: Meta<TagModule> = {
  title: 'Display/Tag',
  component: TagComponent,
  tags: ['autodocs'],

  argTypes: {
    close: {
      control: 'boolean',
    },
    outline: {
      control: 'boolean',
    },
    state: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'info', 'warning', 'neutral'],
    },
  },
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `<ngx-tag [close]="close" [state]="state" [outline]="outline">Texto de prueba</ngx-tag>`,
    };
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default tag;

type Story = StoryObj<TagComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Close: Story = {
  args: {
    close: true,
    state: 'info',
  },
};
