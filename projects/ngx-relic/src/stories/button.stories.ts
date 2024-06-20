import { type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../lib/display/button/button.component';
import { DisplayModule } from '../lib/display/display.module';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DisplayModule> = {
  title: 'Display/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    outline: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success'],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
  },
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `<ngx-button [outline]="outline" [color]="color" [disabled]="disabled" [icon]="icon" [plain]="plain">Click me!</ngx-button>`,
    };
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    outline: false,
    disabled: false,
    color: 'primary',
    icon: 'people',
    plain: false,
  },
};

export const Success: Story = {
  args: {
    outline: false,
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    outline: false,
    color: 'danger',
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    color: 'danger',
  },
};
