import {
  type Meta,
  type StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TooltipComponent, TooltipModule } from './index';
import { ButtonModule } from '../button';

const tooltip: Meta<TooltipModule> = {
  title: 'Display/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [TooltipComponent],
      imports: [CommonModule, ButtonModule],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `<div style="display: flex; justify-content: center; align-items: center; height: 300px">
        <ngx-tooltip ${argsToTemplate(args)}>
          <ngx-button content>Create</ngx-button>
          <span>Create action tooltip!</span>
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
export const TooltipExample: Story = {
  args: {
    width: 224,
    position: 'top',
  },
};
