import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Grid } from '../../atoms/layout/Grid';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'radio', options: ['div', 'span', undefined], if: { arg: 'asChild', truthy: false }, table: { defaultValue: { summary: 'div'} } },
    asChild: { control: 'boolean', type: 'boolean', if: { arg: 'as', truthy: false }, table: { defaultValue: { summary: 'false'}} },
    display: { control: 'inline-radio', options: ['none', 'inline', 'inline-block', 'block', 'contents'], table: { defaultValue: { summary: 'none' } } },
    areas: { type: 'string' },
    columns: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
    rows: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
    flow: { control: 'inline-radio', options: ['row', 'column', 'dense', 'row-dense', 'column-dense'], table: { defaultValue: { summary: 'row' } } },
    align: { control: 'inline-radio', options: ['start', 'center', 'end', 'baseline', 'stretch'], table: { defaultValue: { summary: 'start' } } },
    justify: { control: 'inline-radio', options: ['start', 'center', 'end', 'between'], table: { defaultValue: { summary: 'start' } } },
    gap: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
    gapX: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
    gapY: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
  },
  render: ({ children, ...props }) => (<div style={{backgroundColor: '#ffffc0'}}><Grid {...props}>{children ?? 'Grid'}</Grid></div>),
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
