import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Container } from '../../atoms/layout/Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    asChild: { control: 'boolean', type: 'boolean', if: { arg: 'as', truthy: false }, table: { defaultValue: { summary: 'false'}} },
    size: { control: 'inline-radio', options: ['1', '2', '3', '4'], description: 'size="1 → 448px - size="2 → 688px - size="3 → 880px - size="4 → 1136px" ', table: { defaultValue: { summary: '4' } } },
    display: { control: 'inline-radio', options: ['none', 'initial'], table: { defaultValue: { summary: 'initial' } } },
    align: { control: 'inline-radio', options: ['left', 'center', 'right'], table: { defaultValue: { summary: 'left' } } },
  },
  render: ({ children, ...props }) => (<div style={{backgroundColor: '#ffffc0'}}><Container {...props}>{children ?? 'Container'}</Container></div>),
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
