import { type Meta, type StoryObj } from '@storybook/angular';
import { DisplayModule } from '../lib/display/display.module';
import { LabelComponent } from '../lib/display/label/label.component';

const tag: Meta<DisplayModule> = {
  title: 'Display/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `<ngx-label [required]="required" [disabled]="disabled">Texto de prueba</ngx-label>`,
    };
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default tag;

type Story = StoryObj<LabelComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Required: Story = {
  args: {
    disabled: false,
    required: true,
  },
};
