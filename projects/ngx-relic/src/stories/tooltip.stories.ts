import { type Meta, type StoryObj } from '@storybook/angular';
import { DisplayModule } from '../lib/display/display.module';
import { TooltipComponent } from '../lib/display/tooltip/tooltip.component';

const tooltip: Meta<DisplayModule> = {
  title: 'Display/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],

  argTypes: {
    width: {
      control: 'number',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `<div style="display: flex; justify-content: center; align-items: center; height: 300px">
        <ngx-tooltip [width]="width" [position]="position">
          <p content class="text--sm">ABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCD</p>
          <span>texto de tooltip</span>
        </ngx-tooltip>
      </div>
      `,
    };
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default tooltip;

type Story = StoryObj<TooltipComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Tooltip: Story = {
  args: {
    width: 124,
  },
};
