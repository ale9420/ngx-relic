import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { TagComponent, TagModule } from '../tag';

const tag: Meta<TagModule> = {
  title: 'Display/Tag',
  component: TagComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `<ngx-tag [close]="close" [state]="state" [outline]="outline">Tag</ngx-tag>

      `,
    };
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default tag;

type Story = StoryObj<TagComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TagGroup: Story = {
  args: {
    close: true,
    state: 'info',
    icon: 'location_city',
  },
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `<ngx-tag ${argsToTemplate(args)}>Bogotá</ngx-tag>
      <ngx-tag ${argsToTemplate(args)} class="ml-1">Medellin</ngx-tag>
      <ngx-tag ${argsToTemplate(args)} class="ml-1">Cali</ngx-tag>
      `,
    };
  },
};
